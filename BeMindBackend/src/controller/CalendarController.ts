import { Request, Response } from "express";
import { user } from "../interface/user.interface";
import { validatedToken } from "../security/jwt";
import { Calendar } from "../interface/Calendar.interface";
import { findAll } from "../services/CalendarService";

export async function getAll(_req: Request, res: Response) {
    try {
        const token: user = validatedToken(_req, res);
        const result: Calendar[] = await findAll(token.id);
        res.json(result || []);
    } catch (error) {
        res.status(500).json({ message: error || 'Internal Server Error' });
    }
}