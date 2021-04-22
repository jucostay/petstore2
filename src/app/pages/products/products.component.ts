import { ProductsGetResponse } from './../../interfaces/products';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products!: Products[];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {

    this.productsService
      .getProducts()
      .subscribe((products) => {
        console.log('products')
        console.log(products)
        this.products = products.products
        console.log('this.products')
        console.log(this.products)
    });
  }
}