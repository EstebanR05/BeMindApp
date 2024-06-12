import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { user } from "../interface/user.interface";

dotenv.config();

export const createToken = (user: user): string => {
  const secret = process.env.ACCESS_TOKEN_SECRET;

  if (!secret) {
    throw new Error("ACCESS_TOKEN_SECRET no está definida");
  }

  return jwt.sign(user, secret);
};

export const validatedToken = (_req: Request, res: Response) => {
  const authorization = _req.get("authorization");
  let decodeToken = {} as any;
  let token = null || '';
  const secret = process.env.ACCESS_TOKEN_SECRET || '';

  if (authorization && authorization.toLowerCase().startsWith("bearer")) {
    token = authorization.substring(7);
  }

  decodeToken = jwt.verify(token, secret);
  
  if (!token || !decodeToken.id) {
    return res.status(401).json({ error: "token missing or invalid!" });
  }

  return decodeToken;
};
