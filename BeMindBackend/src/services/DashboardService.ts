import { conexion } from "../conexion_bd";
import { AllByYearly, RecentlyDone, TaskInTheWeek } from "../interface/Dashboard.interface";


export async function findAllByYearly(idUser: number, startDate: string, endDate: string): Promise<AllByYearly[]> {
    const [resp]: any = await conexion.query(
        `SELECT 
            LPAD(MONTH(t.startDate), 1, '0') AS month,
            COUNT(CASE WHEN t.state = 0 THEN t.id ELSE NULL END) AS taskDoing,
            COUNT(CASE WHEN t.state = 1 THEN t.id ELSE NULL END) AS taskDone
        FROM  
            task AS t 
        WHERE 
            t.startDate BETWEEN '${startDate}' AND '${endDate}' 
            AND t.state IN (0, 1)
            AND t.id_user = '${idUser}'
        GROUP BY LPAD(MONTH(t.startDate), 1, '0')
        ORDER BY LPAD(MONTH(t.startDate), 1, '0')`
    );

    return resp as AllByYearly[] || [] as AllByYearly[];
}

export async function findRecentlyDone(id_user: number): Promise<any> {
    const [resp]: any = await conexion.query(
        `SELECT t.id, t.name, t.area, t.doingDate FROM task as t WHERE t.state = 1 AND t.id_user = '${id_user}'` );

    return resp as RecentlyDone[];
}

export async function findTaskInTheWeek(idUser: number, startWeek: string, endWeek: string): Promise<TaskInTheWeek[]> {
    const [resp]: any = await conexion.query(
        `select t.id, t.img,t.name,t.area, t.state 
        from task as t 
        where id_user = '${idUser}' 
        and t.endDate between '${startWeek}' and '${endWeek}'`
    );

    return resp as TaskInTheWeek[] || [] as TaskInTheWeek[];
}