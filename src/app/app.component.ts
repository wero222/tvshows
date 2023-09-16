import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  title = 'serietv';

  logged!: boolean;
  token?: string;

  ngOnInit(): void {
    let u = this.authService.getLoggedUser();
    if (u != null) {
      this.logged = true;
      this.token = u.auth_token;
    } else {
      this.logged = false;
    }
  }
}
