import express from "express";
import { getByIdUser, login, register, updateUser } from "../controller/UserController";
const router = express.Router();

router
  .get("/login", login)
  .post("/register", register)
  .put("/updateUser/:id", updateUser)
  .get("/getByIdUser/:id", getByIdUser);

export default router;
