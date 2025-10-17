import { Context } from "../../types";
import { Resolvers } from "../../types/graphql";
import errorParser, { safeError } from "../../utils/errorParser";

export const resolvers: Resolvers<Context> = {
  Query: {
    event: async (_, { id }, { prisma }) => {
      return prisma.event.findFirst({
        where: { id },
      });
    },
    events: async (_, __, { prisma }) => {
      return prisma.event.findMany();
    },
    myEvents: async (_, {}, { prisma, user }) => {
      if (!user) throw safeError("401 - Non autorisé !");

      return prisma.event.findMany({ where: { createdById: user.id } });
    },
  },

  Mutation: {
    createEvent: async (_, { input }, { prisma, user }) => {
      try {
        if (!user) throw safeError("Non authentifié");

        // verifications

        const event = await prisma.event.create({
          data: { ...input, picture: "", createdById: user.id },
        });

        return event.id;
      } catch (err) {
        throw errorParser(err as Error);
      }
    },
  },
};
