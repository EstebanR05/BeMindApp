import { Request, Response } from "express";
import {
  createTaskService,
  deleteTaskService,
  doingTaskService,
  getAllTaskService,
  getByIdTaskService,
  updateTaskService,
  getAllDoingTaskService,
  returnTaskService,
  findAllPenddingTask,
} from "../services/TaskService";
import { penddingTask, task } from "../interface/task.interface";
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

export async function doingTask(_req: Request, res: Response) {
  try {
    const token: user = validatedToken(_req, res);
    const id = parseInt(_req.params.id, 10);

    const date = new Date();
    let doingDate = date.toISOString();

    const result = await doingTaskService(id, token.id, doingDate);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function getAllDoingTask(_req: Request, res: Response) {
  try {
    const token: user = validatedToken(_req, res);

    const tasks: task = await getAllDoingTaskService(token.id);
    res.json(tasks || {});
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function returnTask(_req: Request, res: Response) {
  try {
    const token: user = validatedToken(_req, res);
    const id = parseInt(_req.params.id, 10);

    const result: task = await returnTaskService(id, token.id);
    res.json(result || {});
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function getAllPenddingTask(_req: Request, res: Response) {
  try {
    const token: user = validatedToken(_req, res);
    const tasks: penddingTask[] = await findAllPenddingTask(token.id);
    res.json(tasks || []);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
