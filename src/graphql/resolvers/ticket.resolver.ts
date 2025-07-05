import { PrismaClient } from "@prisma/client";
import { Context } from "../../types";
import { v4 as uuidv4 } from "uuid";

export const resolvers = {
  Query: {
    tickets: async (_: any, __: any, { prisma }: { prisma: PrismaClient }) => {
      return prisma.ticket.findMany({
        include: { user: true, event: true },
      });
    },

    myTickets: async (_: any, __: any, { prisma, user }: Context) => {
      if (!user) throw new Error("Non authentifié");

      return prisma.ticket.findMany({
        where: { userId: user.id },
        include: { event: true },
      });
    },
  },

  Mutation: {
    createTicket: async (
      _: any,
      args: { input: { eventId: string } },
      { prisma, user }: Context
    ) => {
      if (!user) throw new Error("Non authentifié");

      // Générer un code unique (vous pouvez le remplacer par votre propre logique visuelle)
      const code = uuidv4();

      return prisma.ticket.create({
        data: {
          code,
          event: { connect: { id: args.input.eventId } },
          user: { connect: { id: user.id } },
        },
        include: {
          event: true,
          user: true,
        },
      });
    },

    scanTicket: async (
      _: any,
      args: { code: string },
      { prisma }: { prisma: PrismaClient }
    ) => {
      const ticket = await prisma.ticket.findUnique({
        where: { code: args.code },
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
