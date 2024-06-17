
import { conexion } from "../conexion_bd";
import { Calendar } from "../interface/Calendar.interface";

export async function findAll(idUser: number): Promise<Calendar[]>{
    const [resp]: any = await conexion.query(
        `SELECT t.id, t.name AS title, t.endDate AS start, t.Comentary AS description  FROM task AS t WHERE t.id_user = '${idUser}' AND t.state = 0`
    );
    return resp as Calendar[];
}