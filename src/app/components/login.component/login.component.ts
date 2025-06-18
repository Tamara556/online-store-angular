import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {LoginRequest} from '../../model/login-request.model';
import {AuthService} from '../../services/user.service';
import {FormsModule} from '@angular/forms';
import {LoginResponse} from '../../model/login-response.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  onLogin(): void {
    const credentials: LoginRequest = {
      email: this.email,
      password: this.password
    };

    this.authService.login(credentials).subscribe({
      next: (response: LoginResponse) => {
        this.authService.setCurrentUser(response);
        this.authService.saveToken(response.token);

        const tokenPayload = JSON.parse(atob(response.token.split('.')[1]));
        const email = tokenPayload.sub;


        //checks the user data, if the user data does not match the administrator
        // data then it is a regular user who should be taken to the /home page

        if (email === 'admin@gmail.com' && credentials.password === 'adminadmin') {
          this.router.navigate(['/admin/users']);
        } else {
          this.router.navigate(['/home']);
        }
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Invalid email or password.';
      }
    });
  }

}
