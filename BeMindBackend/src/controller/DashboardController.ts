import { Request, Response } from "express";
import { findAllByYearly, findTaskInTheWeek, findRecentlyDone } from "../services/DashboardService";
import { AllByYearly, RecentlyDone, TaskInTheWeek } from "../interface/Dashboard.interface";
import { validatedToken } from "../security/jwt";
import { user } from "../interface/user.interface";

export async function getAllYearly(_req: Request, res: Response) {
    try {
        const token: user = validatedToken(_req, res);
        const result: AllByYearly[] = await findAllByYearly(token.id, "2023-01-01", "2023-12-31");
        res.send(result || []);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export async function getAllRecentlyDone(_req: Request, res: Response) {
    try {
        const result: RecentlyDone = await findRecentlyDone();
        res.send(result || {});
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export async function getAllTaskInTheWeek(_req: Request, res: Response) {
    try {
        const token: user = validatedToken(_req, res);
        const result: TaskInTheWeek[] = await findTaskInTheWeek(token.id, "2024-06-16", "2024-06-23");
        res.send(result || []);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}