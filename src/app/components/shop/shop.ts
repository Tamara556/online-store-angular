import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Product} from '../../model/Product';
import {ProductService} from '../../services/product.service';
import {AuthService} from '../../services/user.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.html',
  styleUrls: ['./shop.scss'],
})
export class ShopComponent implements OnInit {

  products: Product[] = [];
  imageBaseUrl: string = 'http://localhost:8081/';

  constructor(private productService: ProductService, private authService: AuthService) {}

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe({
      next: (data) => {
        console.log('Products loaded:', data);
        this.products = data;
      },
      error: (err) => {
        console.error('Failed to load products:', err);
      }
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
