import { Request, Response } from "express";
import { findAllByYearly } from "../services/DashboardService";

export async function getAllYearly(_req: Request, res: Response) {
    try {
        const result = await findAllByYearly();
        res.send(result || []);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}