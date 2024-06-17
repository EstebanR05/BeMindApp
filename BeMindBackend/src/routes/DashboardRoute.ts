import { Router } from "express";
import { getAllDoInTheWeek, getAllRecentlyDone, getAllYearly } from "../controller/DashboardController";

const route = Router();

route
    .get('/getAllYearly', getAllYearly)
    .get('/getAllRecentlyDone', getAllRecentlyDone)
    .get('/getAllDoInTheWeek', getAllDoInTheWeek);

export default route;