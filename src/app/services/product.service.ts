import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from '../model/Product';
import {CreateProductModel} from '../model/create-product.model';
import {UpdateProductModel} from '../model/update-product.model';
import {AuthService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8081/products'
  constructor(private http: HttpClient) {}


  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  addProduct(product: CreateProductModel): Observable<Product> {
    return this.http.post<Product>('http://localhost:8081/products', product);
  }


  updateProduct(product: UpdateProductModel): Observable<Product> {
    return this.http.put<Product>(`http://localhost:8081/products/${product.id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8081/products/${id}`);
  }

}
