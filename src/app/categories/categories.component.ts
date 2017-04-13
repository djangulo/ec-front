import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Category } from './';
import { CategoryService } from './';

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

    getWorkCategories(): void {
        this.categoryService
            .getWorkCategories()
            .then(categories => this.categories = categories)
    }
    getPublicationCategories(): void {
        this.categoryService
            .getPublicationCategories()
            .then(categories => this.categories = categories)
    }

    ngOnInit(): void {
        
    }

    onSelect(category: Category): void {
        this.selectedCategory = category;
    }

    gotoCategory(): void {
        this.router.navigate(['/works/categories/', this.selectedCategory.name])
    }
    
}
