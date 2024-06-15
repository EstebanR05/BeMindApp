export interface user {
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  studentCode: number;
  username: string;
  age: number;
  profession: string;
  university: string;
  address: string;
  phone: number;
  city: string;
  country: string;
  postalCode: number;
  aboutMe: string;
  token: string;
}

export interface userLogin {
  email: string;
  password: string;
}
