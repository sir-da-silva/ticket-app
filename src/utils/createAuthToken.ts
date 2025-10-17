import { sign } from "jsonwebtoken";
import { User } from "../../generated/prisma";
import dotenv from "dotenv";
import { ContextUser } from "../types";

dotenv.config();

const createAuthToken = (user: User) => {
  const payload: ContextUser = {
    id: user.id,
    role: user.role,
  };

  const token = sign(payload, process.env.JWT_SECRET || "", {
    expiresIn: "30Days",
  });

  return token;
};

export default createAuthToken;
