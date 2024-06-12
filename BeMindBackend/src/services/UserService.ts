import { conexion } from "../conexion_bd";
import { user } from "../interface/user.interface";
import bcrypt from "bcrypt";

export async function findOneByEmail(email: string) {
  const [resp]: any = await conexion.query(
    `SELECT * FROM Users where email = '${email}'`
  );

  return resp[0] as user;
}

export async function findByIdUser(id: number): Promise<user> {
  const [rows]: any = await conexion.query("SELECT * FROM Users WHERE id = ?", [
    id,
  ]);
  return rows[0] as user;
}

export async function createUserService(user: user): Promise<user> {
  const hashedPassword = await bcrypt.hash(user.password, 10);

  const [resp]: any = await conexion.query(
    `INSERT INTO Users (id, name, lastName, email, password, studentCode) 
    VALUES (NULL, ?, ?, ?, ?, ?)`,
    [user.name, user.lastName, user.email, hashedPassword, user.studentCode]
  );

  if (!resp) {
    throw new Error("Can not create user!");
  }

  const id = resp.insertId;
  return findByIdUser(id);
}

export async function updateUserService(id: number, user: user): Promise<user> {
  const hashedPassword = await bcrypt.hash(user.password, 10);

  const [resp] = await conexion.query(
    `UPDATE Users SET 
      name = '${user.name}', 
      lastName = '${user.lastName}', 
      email = '${user.email}', 
      password = '${hashedPassword}', 
      studentCode = '${user.studentCode}' 
    WHERE Users.id = '${id}'`
  );

  if (!resp) {
    throw new Error("Can not update user!");
  }

  return findByIdUser(id);
}
