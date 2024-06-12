import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { createToken } from "../security/jwt";
import { user, userLogin } from "../interface/user.interface";
import { createUserService, findOneByEmail, updateUserService } from "../services/UserService";

export async function login(_req: Request, res: Response) {
  const login: userLogin = _req.body;
  const user: user = await findOneByEmail(login.email);

  const passwordCorrect =
    user == null ? false : await bcrypt.compare(login.password, user.password);

  if (!(user && passwordCorrect)) {
    res.status(401).json({ error: "invalid email or password!" });
  }

  const token: string = createToken({ userName: "esteban" });

  return res.status(200).send({
    email: user.email,
    name: user.name,
    lastName: user.lastName,
    studentCode: user.studentCode,
    token: token,
  });
}

export async function register(_req: Request, res: Response) {
  try {
    const result: user = await createUserService(_req.body);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function updateUser(_req: Request, res: Response) {
  try {
    const id: number = parseInt(_req.params.id, 10);
    const user: user = _req.body;
    const result = await updateUserService(id, user);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
