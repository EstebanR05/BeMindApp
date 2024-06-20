import { Router } from "express";
import { getAllTaskInTheWeek, getAllRecentlyDone, getAllYearly } from "../controller/DashboardController";

const route = Router();

route
    .get('/getAllYearly', getAllYearly)
    .get('/getAllRecentlyDone', getAllRecentlyDone)
    .get('/getAllDoInTheWeek', getAllTaskInTheWeek);

export default route;