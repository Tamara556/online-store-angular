import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/Product';
import {ProductService} from '../../services/product';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-shop',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './shop.html',
  styleUrls: ['./shop.scss'],
})
export class ShopComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error('Failed to load products', err)
    });
  }
}
