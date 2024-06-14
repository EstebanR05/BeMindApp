export interface user {
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  studentCode: number;
  //subi el resto de una vez asi me baso en esto
}

export interface userByToken {
  id: number;
  name: string;
  lastName: string;
  email: string;
  studentCode: number;
  token: string;
}

export interface userLogin {
  email: string;
  password: string;
}