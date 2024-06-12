import express from "express";
import { getUser, login, register, updateUser } from "../controller/UserController";
const router = express.Router();

router
  .get("/login", login)
  .post("/register", register)
  .put("/updateUser", updateUser)
  .get("/getUser", getUser);

export default router;
