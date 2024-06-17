import { Router } from "express";
import { getAllYearly } from "../controller/DashboardController";

const route = Router();

route
.get('/getAllYearly', getAllYearly)
.get('/')
.get('/');

export default route;