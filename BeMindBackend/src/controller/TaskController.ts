import { Request, Response } from "express";
import {
  createTaskService,
  deleteTaskService,
  getAllTaskService,
  getByIdTaskService,
  updateTaskService,
} from "../services/TaskService";
import { task } from "../interface/task.interface";
import { user } from "../interface/user.interface";
import { validatedToken } from "../security/jwt";

export async function getAllTask(_req: Request, res: Response) {
  try {
    const token: user = validatedToken(_req, res);
    const id_user = token.id;
    const tasks = await getAllTaskService(id_user);
    res.json(tasks || {});
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function getByIdTask(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id, 10);
    const token: user = validatedToken(req, res);
    const task = await getByIdTaskService(id, token.id);
    res.json(task || {});
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function createTask(req: Request, res: Response) {
  try {
    const task: task = req.body;
    const token: user = validatedToken(req, res);
    task.id_user = token.id;
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
    const token: user = validatedToken(req, res);
    task.id_user = token.id;
    const result = await updateTaskService(id, task);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function deleteTask(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id, 10);
    validatedToken(req, res);
    await deleteTaskService(id);
    res.status(204).send("success!");
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
