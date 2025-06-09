import { Routes } from '@angular/router';
import { LoginComponent } from './components/login.component/login.component';
import {Home} from './components/home/home';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: Home,
  }
];

