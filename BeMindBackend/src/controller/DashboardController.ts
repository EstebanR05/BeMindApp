import { Request, Response } from "express";
import { findAllByYearly, findDoInTheWeek, findRecentlyDone } from "../services/DashboardService";
import { AllByYearly, RecentlyDone, DoInTheWeek } from "../interface/Dashboard.interface";

export async function getAllYearly(_req: Request, res: Response) {
    try {
        const result: AllByYearly[] = await findAllByYearly();
        res.send(result || []);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export async function getAllRecentlyDone(_req: Request, res: Response) {
    try {
        const result: RecentlyDone[] = await findRecentlyDone();
        res.send(result || []);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export async function getAllDoInTheWeek(_req: Request, res: Response) {
    try {
        const result: DoInTheWeek[] = await findDoInTheWeek();
        res.send(result || []);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}