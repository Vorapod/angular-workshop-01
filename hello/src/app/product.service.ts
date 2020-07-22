import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAllProducts(): Product[]{
    const p1 = new Product('01', 'Name 01', 100.0);
    const p2 = new Product('02', 'Name 02', 2000.0);
    const p3 = new Product('03', 'Name 03', 30000.0);
    return [ p1, p2, p3 ];
  }
}
