import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { createToken, validatedToken } from "../security/jwt";
import { user, userLogin } from "../interface/user.interface";
import {
  createUserService,
  findByIdUser,
  findOneByEmail,
  updateUserService,
} from "../services/UserService";

export async function login(_req: Request, res: Response): Promise<any> {
  const login: userLogin = _req.body;
  const user: user = await findOneByEmail(login.email);

  const passwordCorrect =
    user == null ? false : await bcrypt.compare(login.password, user.password); // Comparing hashed password with plaintext password

  if (!(user && !passwordCorrect)) {
    return res.status(401).json({ error: "Invalid email or password!" });
  }

  const token: string = createToken(user);

  return res.status(200).json({
    email: user.email,
    name: user.name,
    lastName: user.lastName,
    studentCode: user.studentCode,
    token: token,
  });
}

export async function register(_req: Request, res: Response): Promise<any> {
  try {
    const body: user = _req.body;
    const user: user = await findOneByEmail(body.email);

    if (user) {
      return res
        .status(401)
        .json({ error: "can not create, this process is invalid!" });
    }

    const result: user = await createUserService(body);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function updateUser(_req: Request, res: Response): Promise<any> {
  try {
    const body: user = _req.body;
    const decode: user = validatedToken(_req, res);
    const id: number = decode.id;
    const user: user = await findOneByEmail(body.email);

    if (!(user.id == id)) {
      return res
        .status(401)
        .json({ error: "can not update, this process is invalid!" });
    }

    const result: user = await updateUserService(id, body);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function getUser(_req: Request, res: Response) {
  try {
    const decode: user = validatedToken(_req, res);
    const id: number = decode.id;
    const result: user = await findByIdUser(id);

    res.status(201).send({
      id: result.id,
      name: result.name,
      lastName: result.lastName,
      email: result.email,
      studentCode: result.studentCode,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
