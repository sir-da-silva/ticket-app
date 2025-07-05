import { Context } from "../../types";
import { Resolvers } from "../../types/graphql";

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
  },

  Mutation: {
    createEvent: async (_, args, { prisma, user }) => {
      if (!user) throw new Error("Non authentifié");

      const picture = "";

      return prisma.event.create({
        data: {
          title: args.input.title,
          description: args.input.description,
          picture: picture,
          location: args.input.location,
          date: new Date(args.input.date),
          createdBy: { connect: { id: user.id } },
        },
      });
    },
  },
};
