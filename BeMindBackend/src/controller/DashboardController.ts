import { Request, Response } from "express";
import { findAllByYearly, findDoInTheWeek, findRecentlyDone } from "../services/DashboardService";
import { AllByYearly, RecentlyDone, DoInTheWeek } from "../interface/Dashboard.interface";
import { validatedToken } from "../security/jwt";
import { user } from "../interface/user.interface";

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
        const token: user = validatedToken(_req, res);
        const result: RecentlyDone = await findRecentlyDone(token.id);
        res.send(result || {});
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