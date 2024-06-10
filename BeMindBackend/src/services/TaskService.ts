import { conexion } from "../conexion_bd";
import { task } from "../interface/task.interface";

export async function getAllTaskService() {
  const [resp] = await conexion.query("SELECT * FROM task");
  return resp;
}

export async function getByIdTaskService(id: number) {
  const [resp] = await conexion.query("SELECT * FROM task WHERE id_user = ?", [id]);
  return resp;
}

export async function createTaskService(task: task) {
  console.log(task);
  
  const [resp] = await conexion.query("INSERT INTO task SET ?", [task]);
  return resp;
}

export async function updateTaskService(id: number, task: task) {
  const [resp] = await conexion.query(`UPDATE task SET img = ${task.img}, name = ${task.name}, area = ${task.area}, code = ${task.code}, startDate = ${task.startDate}, endDate = ${task.endDate}, Comentary = ${task.Comentary} WHERE task.id = ${id}`);
  return resp;
}

export async function deleteTaskService(id: number) {
  const [resp] = await conexion.query("DELETE FROM task WHERE id = ?", [id]);
  return resp;
}
