import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product'
import { ProductService } from '../product.service'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filterData = '';
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

}
