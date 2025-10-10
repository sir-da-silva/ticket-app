import { Context } from "../../types";
import { Resolvers } from "../../types/graphql";
import errorParser, { safeError } from "../../utils/errorParser";

export const resolvers: Resolvers<Context> = {
  Query: {
    events: async (_, __, { prisma }) => {
      return prisma.event.findMany();
    },

    event: async (_, args, { prisma }) => {
      return prisma.event.findUnique({
        where: { id: args.id },
      });
    },
    myEvents: async (_, {}, { prisma, user }) => {
      if (!user) throw safeError("401 - Non autorisé !");

      return prisma.event.findMany({ where: { createdById: user.id } });
    },
  },

  Mutation: {
    createEvent: async (_, { input }, { prisma, user }) => {
      try {
        if (!user) throw safeError("401 - Non autorisé !");

        // verifications

        return prisma.event.create({ data: input });
      } catch (err) {
        throw errorParser(err as Error);
      }
    },
  },
};
