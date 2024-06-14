import { conexion } from "../conexion_bd";
import { user } from "../interface/user.interface";
import bcrypt from "bcrypt";

export async function findOneByEmail(email: string) {
  const [resp]: any = await conexion.query(
    `SELECT * FROM Users where email = '${email}'`
  );

  return resp[0] as user;
}

export async function findOneByCode(studentCode: number) {
  const [resp]: any = await conexion.query(
    `SELECT * FROM Users where email = '${studentCode}'`
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
    `INSERT INTO Users (id, name, email, password, studentCode) 
    VALUES (NULL, ?, ?, ?, ?)`,
    [user.name, user.email, hashedPassword, user.studentCode]
  );

  if (!resp) {
    throw new Error("Can not create user!");
  }

  const id = resp.insertId;
  return findByIdUser(id);
}

export async function updateUserService(id: number, user: user): Promise<user> {
  //const hashedPassword = await bcrypt.hash(user.password, 10);

  const [resp] = await conexion.query(
    `UPDATE Users SET 
      name = '${user.name}', 
      lastName = '${user.lastName}', 
      email = '${user.email}',  
      studentCode = '${user.studentCode}',
      username = '${user.username}',
      age = '${user.age}',
      profession = '${user.profession}',
      university = '${user.university}',
      address = '${user.address}',
      phone = '${user.phone}',
      city = '${user.city}',
      country = '${user.country}',
      postalCode = '${user.postalCode}',
      aboutMe = '${user.aboutMe}' 
    WHERE Users.id = '${id}'`
  );

  if (!resp) {
    throw new Error("Can not update user!");
  }

  return findByIdUser(id);
}
