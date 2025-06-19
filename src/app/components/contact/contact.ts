import { Component } from '@angular/core';
import {AuthService} from '../../services/user.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  constructor(private authService: AuthService) {
  }

  logout(): void {
    this.authService.logout();
  }
}
