import { PrismaClient, User } from "../../generated/prisma";

export interface Context {
  prisma: PrismaClient;
  user: Partial<User> | null;
}
