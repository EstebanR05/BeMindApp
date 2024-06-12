import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { user } from "../interface/user.interface";

dotenv.config();

export const createToken = (userName: any): string => {
  const secret = process.env.ACCESS_TOKEN_SECRET;

  if (!secret) {
    throw new Error("ACCESS_TOKEN_SECRET no está definida");
  }

  return jwt.sign(userName, secret);
};

export const validatedToken = (): user => {
  const user = {} as user;

  return user;
};
