import { Routes } from '@angular/router';
import { LoginComponent } from './components/login.component/login.component';

import { AuthGuard } from './guard/AuthGuard';
import {Home} from './components/home/home';
import {ShopComponent} from './components/shop/shop';
import {About} from './components/about/about';
import {Contact} from './components/contact/contact';
import {AdminGuard} from './guard/AdminGuard';
import {AdminProducts} from './components/admin-products/admin-products';
import {AdminUsersComponent} from './components/admin-users/admin-users';
import {AddUser} from './components/add-user/add-user';
import {UpdateUser} from './components/update-user/update-user';
import {AddProduct} from './components/add-product/add-product';
import {UpdateProduct} from './components/update-product/update-product';

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
  },
  {
    path: 'admin/users',
    component: AdminUsersComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/products',
    component: AdminProducts,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin/adduser',
    component: AddUser,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin/updateuser/:id',
    component: UpdateUser,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin/addproduct',
    component: AddProduct,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin/updateproduct/:id',
    component: UpdateProduct,
    canActivate: [AdminGuard]
  }
];
