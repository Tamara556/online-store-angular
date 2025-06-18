import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CreateUserModel} from '../../model/create-user.model';
import {AuthService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.scss'
})
export class AddUser {
  user: CreateUserModel = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.addUser(this.user).subscribe({
      next: () => this.router.navigate(['/admin/users']),
      error: err => console.error('Failed to create user:', err)
    });
  }
}
