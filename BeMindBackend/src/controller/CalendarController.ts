import { Request, Response } from "express";
import { user } from "../interface/user.interface";
import { validatedToken } from "../security/jwt";
import { Calendar } from "../interface/Calendar.interface";
import { findAll } from "../services/CalendarService";

export async function getAll(_req: Request, res: Response) {
    try {
        const token: user = validatedToken(_req, res);
        const result: Calendar[] | undefined = await findAll(token.id) || [];

        result.forEach((element: Calendar) => {
            element.id = element.id.toString();
            element.start = new Date(element.start).toISOString().split('T')[0];
        });

        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error || 'Internal Server Error' });
    }
}