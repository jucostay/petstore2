import { category } from '../../interfaces/category';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories-featured',
  templateUrl: './categories-featured.component.html',
  styleUrls: ['./categories-featured.component.scss']
})
export class CategoriesFeaturedComponent implements OnInit {

  categories: category[] = [];

  constructor(private categoriesService: CategoriesService) {

  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoriesService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

}
