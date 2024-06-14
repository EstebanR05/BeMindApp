export interface user {
  id: number;
  name: string;
  lastName: string;
  email: string;
  studentCode: number;
  username: string;
  age: number;
  profesión: string;
  university: string;
  address: string;
  phone: number;
  city: string;
  country: string;
  postalCode: number;
  aboutMe: string;
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