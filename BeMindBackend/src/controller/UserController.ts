import { Request, Response } from "express";
export async function login(_req: Request, res: Response) {
  res.send({ messeng: "welcome" });
}

export async function register(_req: Request, res: Response) {
  res.send({ messeng: "welcome" });
}

export async function updateUser(_req: Request, res: Response) {
  res.send({ messeng: "welcome" });
}
