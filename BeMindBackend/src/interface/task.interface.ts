export interface task {
    id: number;
    img: string;
    name: string;
    area: string;
    code: number;
    startDate: Date;
    endDate: Date;
    Comentary: string;
    id_user: number;
}

export interface penddingTask{
    id: number;
    img: string;
    name: string;
    endDate: Date;
}