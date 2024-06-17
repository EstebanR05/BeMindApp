import express from "express";
import { getUser, login, logout, register, updateUser } from "../controller/UserController";
const router = express.Router();

router
  .post("/login", login)
  .post("/register", register)
  .put("/updateUser", updateUser)
  .get("/getUser", getUser)
  .get("/logout", logout);

export default router;
