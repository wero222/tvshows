import { Component } from '@angular/core';
import { LoginDto } from '../models/user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  model = new LoginDto();

  constructor(public authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.model).subscribe({
      next: (user) => {
        this.authService.setLoggedUser(user);
        this.router.navigate(['series', 'salvate']);
      },
      error: (e) => {
        if (e.status === 401) {
          throw new Error('Login failed.');
        }
      },
    });
  }
}
