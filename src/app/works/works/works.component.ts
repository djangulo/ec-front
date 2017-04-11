import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Category, Work } from './../../models';
import { CategoryService, WorkService } from './../../services';

@Component({
    selector: 'works',
    templateUrl: './works.component.html',
    styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
    works: Work[];
    categories: Category[];
    selectedCategory: Category;
    selectedWork: Work;

    constructor(
        private workService: WorkService,
        private categoryService: CategoryService,
        private router: Router){ }

    getCategories(): void {
        this.categoryService
            .getWorkCategories()
            .then(categories => this.categories = categories)
    }

    getWorks(): void {
        this.workService
            .getWorks()
            .then(works => this.works = works)
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