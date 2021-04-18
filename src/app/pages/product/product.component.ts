import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/services/products.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
  ) { }

  product!: Products;

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productsService.getProduct(`${id}`)
  .subscribe(Products => this.product = Products)
  };

  public swiperConfig: SwiperOptions = {
    direction: 'horizontal', 
    keyboard: false, // ativação por teclado desativada
    grabCursor: true, // permite arrastar pelo mouse as fotos
    pagination: { el: '.swiper-pagination', clickable: true, } // parte inferior da foto onde ficam as outras fotos que podem ser passadas
    };

};
