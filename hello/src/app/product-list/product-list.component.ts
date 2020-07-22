import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  filterData: string;
  constructor() { }

  ngOnInit(): void {
    const p1 = new Product('01', 'Name 01', 100.0);
    const p2 = new Product('02', 'Name 02', 2000.0);
    const p3 = new Product('03', 'Name 03', 30000.0);
    this.products.push(p1, p2, p3);
  }

}
