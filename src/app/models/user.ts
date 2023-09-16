export class RegisterDto {
  name: string;
  surname: string;
  email: string;
  password: string;
  auth_token?: string;

  constructor(n: string = '', s: string = '', e: string = '', p: string = '') {
    this.name = n;
    this.surname = s;
    this.email = e;
    this.password = p;
  }
}

export class LoginDto {
  email: string;
  password: string;

  constructor(e: string = '', p: string = '') {
    this.email = e;
    this.password = p;
  }
}

export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface LoggedUser {
  user: User;
  auth_token: string;
}
