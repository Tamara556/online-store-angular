import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthService} from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    console.log('canActivate guard from admin guard');
    const token = this.authService.getToken();
    console.log('token', token);
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const email = payload.sub;

      if (email === 'admin@gmail.com') {
        return true;
      } else {
        this.router.navigate(['/home']);
        return false;
      }
    } catch (e) {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
