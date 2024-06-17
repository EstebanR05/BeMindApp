import { conexion } from "../conexion_bd";


export async function findAllByYearly() {
    const [resp]: any = await conexion.query(
        `SELECT * FROM Users`
    );

    return resp;
}