import { Component } from '@angular/core';
import { RegisterDto } from '../models/user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  model = new RegisterDto();

  constructor(public authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.model).subscribe({
      next: (user) => {
        this.authService.setLoggedUser(user);
        this.model = new RegisterDto();
        this.router.navigate(['home']);
      },
      error: (e) => {
        if (e.status === 406) {
          throw new Error('This e-mail has already been used.');
        }
      },
    });
  }
}
