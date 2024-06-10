import { user } from "./user.interface";

export interface task {
    id: number;
    img: string;
    name: string;
    area: string;
    code: number;
    startDate: Date;
    endDate: Date;
    Comentary: string;
    id_user: user;
}