import { conexion } from "../conexion_bd";
import { task } from "../interface/task.interface";

export async function getAllTaskService(id_user: number) {
  const [resp] = await conexion.query(
    `SELECT * FROM task where id_user = '${id_user}'`
  );
  return resp;
}

export async function getByIdTaskService(id: number, id_user: number) {
  const [rows]: any = await conexion.query(
    "SELECT * FROM task WHERE id = ? and id_user = ?",
    [id, id_user]
  );
  return rows[0];
}

export async function createTaskService(task: task) {
  const [resp]: any = await conexion.query(
    `INSERT INTO task 
    (id, img, name, area, code, startDate, endDate, Comentary, id_user) 
    VALUES (NULL, 
    '${task.img}', '${task.name}',
    '${task.area}', ${task.code}, 
    '${task.startDate}', '${task.endDate}',
    '${task.Comentary}', ${task.id_user})`
  );

  const id = resp.insertId;
  return getByIdTaskService(id, task.id_user);
}

export async function updateTaskService(id: number, task: task) {
  const [resp] = await conexion.query(
    `UPDATE task SET 
      img = '${task.img}', 
      name = '${task.name}', 
      area = '${task.area}', 
      code = ${task.code}, 
      startDate = '${task.startDate}', 
      endDate = '${task.endDate}', 
      Comentary = '${task.Comentary}'
    WHERE task.id = ${id} and id_user = '${task.id_user}'`
  );

  if (!resp) {
    throw new Error("No se pudo actualizar la tarea");
  }

  return getByIdTaskService(id, task.id_user);
}

export async function deleteTaskService(id: number) {
  const [resp] = await conexion.query("DELETE FROM task WHERE id = ?", [id]);
  return resp;
}
