import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Category } from './../models';
import { CategoryService } from './../services';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
    categories: Category[];
    selectedCategory: Category;

    constructor(
        private categoryService: CategoryService,
        private location: Location,
        private router: Router){ }

    getCategories(): void {
      var path = this.location.path()
      if (path.search(/works/gi) !== -1) {
        this.categoryService
            .getWorkCategories()
            .then(categories => this.categories = categories)
      } else if (path.search(/publications/gi) !== -1 ){
        this.categoryService
            .getPublicationCategories()
            .then(categories => this.categories = categories)
      } else if (path.search(/press/gi) !== -1 ){
        this.categoryService
            .getPressCategories()
            .then(categories => this.categories = categories)
      }
        
    }

    ngOnInit(): void {
        this.getCategories();
    }

    onSelect(category: Category): void {
        this.selectedCategory = category;
    }

    gotoCategory(): void {
        this.router.navigate(['/works/categories/', this.selectedCategory.name])
    }
    
}
