import { conexion } from "../conexion_bd";
import { AllByYearly, RecentlyDone, DoInTheWeek } from "../interface/Dashboard.interface";


export async function findAllByYearly(): Promise<any> {
    const [resp]: any = await conexion.query(
        `SELECT * FROM task WHERE status = 0`
    );

    return resp as AllByYearly[];
}

export async function findRecentlyDone(): Promise<any> {
    const [resp]: any = await conexion.query(
        `SELECT * FROM task WHERE status = 0`
    );

    return resp as RecentlyDone[];
}

export async function findDoInTheWeek(): Promise<any> {
    const [resp]: any = await conexion.query(
        `SELECT * FROM task WHERE status = 0`
    );

    return resp as DoInTheWeek[];
}