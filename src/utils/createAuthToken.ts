import { sign } from "jsonwebtoken";
import { User } from "../../generated/prisma";
import dotenv from "dotenv";

dotenv.config();

const createAuthToken = (user: User) => {
  const payload = {
    id: user.id,
    email: user.email,
  };

  const token = sign(payload, process.env.JWT_SECRET || "", {
    expiresIn: "30Days",
  });

  return token;
};

export default createAuthToken;
