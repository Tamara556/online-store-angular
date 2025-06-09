import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../../model/login-request.model';
import {AuthService} from '../../services/user';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    const credentials: LoginRequest = {
      email: this.email,
      password: this.password
    };
    console.log(credentials,"aaaaaaaa")
    this.authService.login(credentials).subscribe({
      next: (response) => {
        console.log(response,"RRRRRRRRR")
        this.authService.saveToken(response.token);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.errorMessage = 'Invalid email or password';
      }
    });
  }
}
