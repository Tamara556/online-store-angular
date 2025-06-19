import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UpdateProductModel} from '../../model/update-product.model';

@Component({
  selector: 'app-update-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './update-product.html',
  styleUrl: './update-product.scss'
})
export class UpdateProduct {
  product: UpdateProductModel = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    qty: 0
  }

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute
  ) {
    this.product.id = Number(this.route.snapshot.paramMap.get('id')!);
    console.log('Product ID:', this.product.id);
  }

  onSubmit() {
    this.productService.updateProduct(this.product).subscribe({
      next: () => this.router.navigate(['/admin/products']),
      error: err => console.error('Failed to update product', err)
    });
  }
}
