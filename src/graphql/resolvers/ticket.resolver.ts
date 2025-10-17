import { v4 as uuidv4 } from "uuid";
import { Context } from "../../types";
import { Resolvers } from "../../types/graphql";

export const resolvers: Resolvers<Context> = {
  Query: {
    ticket: async (_, { id }, { prisma }) => {
      return prisma.ticket.findFirst({
        where: { id },
        include: { event: true },
      });
    },
    tickets: async (_, { eventId }, { prisma }) => {
      return prisma.ticket.findMany({
        where: { eventId },
        include: { user: true, event: { include: { createdBy: true } } },
      });
    },

    myTickets: async (_, __, { prisma, user }) => {
      if (!user) throw new Error("Non authentifié");

      return prisma.ticket.findMany({
        where: { userId: user.id },
        include: { event: { include: { createdBy: true } } },
      });
    },
  },

  Mutation: {
    createTicket: async (_, { input }, { prisma, user }) => {
      if (!user) throw new Error("Non authentifié");

      // Générer un code unique (vous pouvez le remplacer par votre propre logique visuelle)
      const code = uuidv4();

      return prisma.ticket.create({
        data: {
          code,
          event: { connect: { id: input.eventId } },
          user: { connect: { id: user.id } },
        },
        include: {
          event: true,
          user: true,
        },
      });
    },

    scanTicket: async (_, { code }, { prisma }) => {
      const ticket = await prisma.ticket.findUnique({
        where: { code },
        include: { event: true, user: true },
      });

      if (!ticket) {
        throw new Error("Ticket invalide");
      }

      if (ticket.used) {
        throw new Error("Ce ticket a déjà été utilisé");
      }

      // Marquer comme utilisé
      return prisma.ticket.update({
        where: { id: ticket.id },
        data: { used: true },
        include: { event: true, user: true },
      });
    },
  },
};
