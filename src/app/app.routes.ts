import { Routes } from '@angular/router';
import { LoginComponent } from './components/login.component/login.component';

import { AuthGuard } from './AuthGuard';
import {Home} from './components/home/home';
import {ShopComponent} from './components/shop/shop';
import {About} from './components/about/about';
import {Contact} from './components/contact/contact';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: Home,
    canActivate: [AuthGuard]
  },
  {
    path: 'shop',
    component: ShopComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    component: About,
    canActivate: [AuthGuard]
  },
  {
    path: 'contact',
    component: Contact,
    canActivate: [AuthGuard]
  }
];
