import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggedUser, LoginDto, RegisterDto } from './models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(user: RegisterDto): Observable<LoggedUser> {
    return this.http.post<LoggedUser>(
      environment.USER_API_BASE_URL + '/reg',
      user
    );
  }

  login(user: LoginDto): Observable<LoggedUser> {
    return this.http.post<LoggedUser>(
      environment.USER_API_BASE_URL + '/login',
      user
    );
  }

  logout(token: String) {
    return this.http.get(environment.USER_API_BASE_URL + '/logout/' + token);
  }

  setLoggedUser(user: LoggedUser) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getLoggedUser(): LoggedUser {
    let userStorage = localStorage.getItem('user');

    let u: LoggedUser = JSON.parse(userStorage!);
    return u;
  }
}
