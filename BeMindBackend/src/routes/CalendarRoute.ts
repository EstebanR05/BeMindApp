import { Router } from "express";
import { getAll } from "../controller/CalendarController";

const router = Router();

router.get('/calendar', getAll);

export default router;
