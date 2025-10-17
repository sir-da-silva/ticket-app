import { Resolvers } from "../../types/graphql";
import { Context } from "../../types";
import { isEmail, isName, isValidPassword } from "../../utils/validator";
import errorParser, { safeError } from "../../utils/errorParser";
import createAuthToken from "../../utils/createAuthToken";
import password from "../../utils/password";
import sendMail from "../../utils/sendMail";

/** PSUM for Pending Sign-Up Map */
const PSUM = new Map<
  string,
  {
    code: string;
    date: Date;
    user: {
      email: string;
      name: string;
      password: string;
    };
  }
>();

// remove expired codes every 24hrs
setInterval(() => {
  PSUM.forEach((item, key) => {
    new Date().getTime() - item.date.getTime() > 600000 && PSUM.delete(key);
  });
}, 24 * 3600 * 1000);

export const resolvers: Resolvers<Context> = {
  Query: {
    user: async (_, { id }, { prisma }) => {
      return prisma.user.findFirst({ where: { id } });
    },
    login: async (_, { input }, { prisma }) => {
      try {
        const user = await prisma.user.findFirst({
          where: { email: input.email },
        });

        if (!user) {
          // no account for this email
          throw safeError("Cet email n'appartient a aucun compte !");
        } else if (!password.test(input.password, user.password)) {
          // invalid password
          throw safeError("Mot de passe invalide !");
        } else {
          user.badge;
          // create auth token
          const token = createAuthToken(user);

          return { token, user };
        }
      } catch (err) {
        throw errorParser(err as Error);
      }
    },
  },
  Mutation: {
    initSignUp: async (_, { input }, { prisma }) => {
      try {
        // verifications
        if (!isEmail(input.email)) {
          throw safeError("Cet email est invalide !");
        }
        if (!isName(input.name)) {
          throw safeError(
            "Le nom ne peut pas contenir de caractères speciaux !"
          );
        }
        if (!isValidPassword(input.password)) {
          throw safeError(
            "Le mot de passe doit contenir au moins 6 caractères !"
          );
        }
        if (await prisma.user.findFirst({ where: { email: input.email } })) {
          throw safeError("Cet email correspond déjà a un compte existant !");
        }

        // set new pending user
        const date = new Date();
        const code = Math.floor(100000 + Math.random() * 900000).toString();
        const user = {
          name: input.name,
          email: input.email,
          password: password.hash(input.password),
        };

        PSUM.set(input.email, { date, code, user });

        // send code to user
        const msg = "Votre code de verification est : " + code;
        sendMail(input.email, msg);

        return true;
      } catch (err) {
        throw errorParser(err as Error);
      }
    },
    completeSignUp: async (_, { input }, { prisma }) => {
      try {
        /** PSU for Pending Sign-Up */
        const PSU = PSUM.get(input.email);

        if (!PSU) {
          // no pending code
          throw safeError("Vous n'avez pas de code en attente !");
        } else if (input.code != PSU.code) {
          // input code doesn't match pending code
          throw safeError("Code de verification invalide !");
        } else if (new Date().getTime() - PSU.date.getTime() > 600000) {
          // pending code expired
          PSUM.delete(input.email);
          throw safeError("Le code de verification a expiré !");
        } else {
          // save user and create auth token
          const user = await prisma.user.create({ data: PSU.user });
          const token = createAuthToken(user);

          // delete pending sign-up
          PSUM.delete(input.email);

          return { token, user };
        }
      } catch (err) {
        throw errorParser(err as Error);
      }
    },
    updateUser: async (_, { input }, { prisma, user }) => {
      try {
        if (!user) throw safeError("401 - Non autorisé !");

        throw safeError("Non terminé !");
      } catch (err) {
        throw errorParser(err as Error);
      }
    },
  },
};
