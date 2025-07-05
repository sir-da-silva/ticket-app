import { PrismaClient, User } from "../../../generated/prisma";
import { Request } from "express";
import { Context } from "../../types";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

const getUserFromToken = (token: string): Partial<User> | null => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    return { id: decoded.id, role: decoded.role };
  } catch (err) {
    return null;
  }
};

export const context = ({ req }: { req: Request }): Context => {
  const authHeader = req?.headers?.authorization || "";
  const token = authHeader.replace("Bearer ", "");
  const user = token ? getUserFromToken(token) : null;

  return {
    prisma,
    user,
  };
};
