import { Request, Response } from "express";
import { findAllByYearly, findTaskInTheWeek, findRecentlyDone } from "../services/DashboardService";
import { AllByYearly, RecentlyDone, TaskInTheWeek } from "../interface/Dashboard.interface";
import { validatedToken } from "../security/jwt";
import { user } from "../interface/user.interface";

export async function getAllYearly(_req: Request, res: Response) {
    try {
        const token: user = validatedToken(_req, res);
        let date = new Date();
        let startDate: string = date.getFullYear().toString() + '-01-01';
        let endDate: string = date.getFullYear().toString() + '-12-31';
        const result: AllByYearly[] = await findAllByYearly(token.id, startDate.toString(), endDate.toString());
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

export async function getAllTaskInTheWeek(_req: Request, res: Response) {
    try {
        const token: user = validatedToken(_req, res);

        //get week
        let date = new Date();
        let startDate = getLastSunday(new Date(date.getTime()));
        let endDate = getNextSunday(new Date(startDate.getTime()));

        let startDateString: string = startDate.toISOString().split('T')[0];
        let endDateString: string = endDate.toISOString().split('T')[0];

        const result: TaskInTheWeek[] = await findTaskInTheWeek(token.id, startDateString, endDateString);
        res.send(result || []);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

function getLastSunday(date: Date): Date {
    const dayOfWeek = date.getDay();
    const daysSinceLastSunday = dayOfWeek === 0 ? 0 : dayOfWeek;
    date.setDate(date.getDate() - daysSinceLastSunday);
    return date;
}

function getNextSunday(date: Date): Date {
    date.setDate(date.getDate() + 7);
    return date;
}