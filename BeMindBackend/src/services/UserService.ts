import { conexion } from "../conexion_bd";
import { user } from "../interface/user.interface";

export async function getUser(user: user) {
  const [resp]: any = await conexion.query(
    `SELECT * FROM User where name = '${user.name}'`
  );
  
  return resp[0] as user;
}
