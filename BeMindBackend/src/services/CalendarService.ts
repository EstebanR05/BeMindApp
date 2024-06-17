
import { conexion } from "../conexion_bd";
import { Calendar } from "../interface/Calendar.interface";

export async function findAll(idUser: number): Promise<Calendar[]>{
    const [resp]: any = await conexion.query(`SELECT t.id, t.name, t.endDate FROM task as t WHERE t.id_user = '${idUser}'`);
    return resp[0] as Calendar[];
}