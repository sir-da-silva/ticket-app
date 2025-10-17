import { PrismaClient, Role } from "../../generated/prisma";

export interface ContextUser {
  id: string;
  role: Role;
}

export interface Context {
  prisma: PrismaClient;
  user: ContextUser | null;
}
