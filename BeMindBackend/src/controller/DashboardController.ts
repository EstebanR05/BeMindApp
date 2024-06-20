import { Request, Response } from "express";
import { findAllByYearly, findTaskInTheWeek, findRecentlyDone } from "../services/DashboardService";
import { AllByYearly, RecentlyDone, TaskInTheWeek } from "../interface/Dashboard.interface";

export async function getAllYearly(_req: Request, res: Response) {
    try {
        const result: AllByYearly[] = await findAllByYearly(1, "2023-01-01", "2023-12-31");
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
        const result: TaskInTheWeek[] = await findTaskInTheWeek(1, "2024-06-16", "2024-06-23");
        res.send(result || []);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}