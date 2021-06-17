export interface iUser {
  id: number;
  name: string;
  email: string;
  tokem: string;
  password: string;
}

export interface iUserLogin {
  email: string;
  password: string;
}

export interface iUserSignUp {
  name: string;
  email: string;
  password: string;
}