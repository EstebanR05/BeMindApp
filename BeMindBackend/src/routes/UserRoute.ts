import express from "express";
import { login, register, updateUser } from "../controller/UserController";
const router = express.Router();

router
  .get("/login", login)
  .post("/register", register)
  .put("/updateUser", updateUser);

export default router;
