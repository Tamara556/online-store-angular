import {Component, OnInit} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {Product} from '../../model/Product';
import {ProductService} from '../../services/product.service';
import {AuthService} from '../../services/user.service';

@Component({
  selector: 'app-admin-products',
  imports: [CommonModule],
  templateUrl: './admin-products.html',
  styleUrl: './admin-products.scss'
})
export class AdminProducts implements OnInit {
  products: Product[] = [];
  errorMessage: string = '';

  constructor(private productService: ProductService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(): void {
    this.productService.getAllProducts().subscribe({
      next: (products: Product[]) => {
        this.products = products;
      },
      error: (err) => {
        console.error('Failed to load products', err);
        this.errorMessage = 'Failed to load products';
      }
    });
  }

  onDeleteProduct(id: number): void {
    console.log('Product ID to delete:', id);
    if(confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.products = this.products.filter(product => product.id !== id);
      });
    }
  }

  logout(): void {
    this.authService.logout();
  }

}
