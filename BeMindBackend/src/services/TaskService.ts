import { conexion } from "../conexion_bd";

export async function getAllTaskService() {
  const [resp] = await conexion.query("SELECT * FROM task");
  return resp;
}

export async function getByIdTaskService(id: number) {
  const [resp] = await conexion.query("SELECT * FROM task WHERE id_user = ?", [id]);
  return resp;
}

export async function createTaskService(task: any) {
  const [resp] = await conexion.query("INSERT INTO task SET ?", [task]);
  return resp;
}

export async function updateTaskService(id: number, task: any) {
  const [resp] = await conexion.query("UPDATE task SET ? WHERE id = ?", [task, id]);
  return resp;
}

export async function deleteTaskService(id: number) {
  const [resp] = await conexion.query("DELETE FROM task WHERE id = ?", [id]);
  return resp;
}
