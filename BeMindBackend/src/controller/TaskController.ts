import { Request, Response } from "express";
import {
  createTaskService,
  deleteTaskService,
  getAllTaskService,
  getByIdTaskService,
  updateTaskService,
} from "../services/TaskService";
import { task } from "../interface/task.interface";

export async function getAllTask(_req: Request, res: Response) {
  try {
    const tasks = await getAllTaskService();
    res.json(tasks || {});
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function getByIdTask(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id, 10);
    const task = await getByIdTaskService(id);
    res.json(task || {});
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function createTask(req: Request, res: Response) {
  try {
    const task = req.body;
    const result = await createTaskService(task);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function updateTask(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id, 10);
    const task: task = req.body;
    const result = await updateTaskService(id, task);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function deleteTask(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id, 10);
    await deleteTaskService(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
