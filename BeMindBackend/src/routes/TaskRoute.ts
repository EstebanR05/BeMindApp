import express from "express";
import {
  createTask,
  deleteTask,
  doingTask,
  getAllDoingTask,
  getAllPenddingTask,
  getAllTask,
  getByIdTask,
  returnTask,
  updateTask,
} from "../controller/TaskController";

const router = express.Router();

router
  .get("/Task", getAllTask)
  .get("/Task/:id", getByIdTask)
  .post("/Task", createTask)
  .put("/Task/:id", updateTask)
  .delete("/Task/:id", deleteTask)
  .post("/doingTask/:id", doingTask)
  .get("/getAllDoinTask", getAllDoingTask)
  .post("/returnTask/:id", returnTask)
  .get("/penddingTask", getAllPenddingTask);

export default router;
