export interface user {
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  studentCode: number;
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