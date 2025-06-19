import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from '@angular/common';
import {CreateProductModel} from '../../model/create-product.model';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
    imports: [
        FormsModule,
        CommonModule
    ],
  templateUrl: './add-product.html',
  styleUrl: './add-product.scss'
})
export class AddProduct {
  product: CreateProductModel = {
    name: '',
    price: 0,
    description: '',
    qty: 0
  }

  constructor(private productService: ProductService, private router: Router) {}

  onSubmit() {
    this.productService.addProduct(this.product).subscribe({
      next: () => this.router.navigate(['/admin/products']),
      error: err => console.error('Error adding product', err)
    });
  }

}
