import { Component } from '@angular/core';
import {AuthService} from '../../services/user.service';

@Component({
  selector: 'app-home',
  imports: [],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  constructor(private authService: AuthService) {
  }

  logout(): void {
    this.authService.logout();
  }
}
