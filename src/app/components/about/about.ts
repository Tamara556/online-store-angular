import {Component} from '@angular/core';
import {AuthService} from '../../services/user.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  constructor(private authService: AuthService) {
  }

  logout(): void {
    this.authService.logout();
  }
}
