export interface user {
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  studentCode: number;
  username: string;
  age: string;
  profesión: string;
  university: string;
  address: string;
  phone: string;
  city: string;
  country: string;
  postalCode: string;
  aboutMe: string;
}

export interface userLogin {
  email: string;
  password: string;
}
