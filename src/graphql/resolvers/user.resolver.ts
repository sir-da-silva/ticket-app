import { Resolvers } from "../../types/graphql";
import { Context } from "../../types";
import createAuthToken from "../../utils/createAuthToken";
import errorParser, { safeError } from "../../utils/errorParser";
import password from "../../utils/password";
import { User } from "../../../generated/prisma";

const pendingSignUp = new Map<
  string,
  { code: string; date: Date; user: User }
>();

export const resolvers: Resolvers<Context> = {
  Query: {},
  Mutation: {
    initSignUp: async (__dirname, { input }, { prisma }) => {
      // check validity
      // set new pending user
      pendingSignUp.set(input.emailOrNumber, {
        date: new Date(),
        code: "",
        user: {
          name: input.name,
          email: input.email,
          password: password.hash(input.password),
          isGoogleAuthenticated: false,

        },
      });
      // sendMailOrSMS()
    },
    completeSignUp: async (_, { input }, { prisma }) => {
      try {
        const pendingUser = pendingSignUp.get(input.key);

        if (!pendingUser) {
          // no pending code
          throw safeError("Vous n'avez pas de code en attente !");
        } else if (new Date().getTime() - pendingUser.date.getTime() > 0) {
          // pending code expired
          pendingSignUp.delete(input.key);
          throw safeError("Le code de verification a expire !");
        } else if (input.code != pendingUser.code) {
          // input code don't match pending code
          throw safeError("Code de verification invalide !");
        } else {
          const user = await prisma.user.create({ data: pendingUser.user });
          const token = createAuthToken(user);

          return { token, user };
        }
      } catch (err) {
        throw errorParser(err as Error);
      }
    },
  },
};
