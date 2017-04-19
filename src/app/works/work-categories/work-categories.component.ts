import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Category } from './../../categories/category.model';
import { WorkService } from './../work.service';

@Component({
  templateUrl: './work-categories.component.html',
  styleUrls: [
    './work-categories.component.css'
    ]
})
export class WorkCategoriesComponent implements OnInit {
  categories: Category[];
  selectedCategory: Category;

  constructor(
    private workService: WorkService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.workService
      .getWorkCategories()
      .then(categories => this.categories = categories);
  }
  onSelect(category: Category): void {
    this.selectedCategory = category;
    this.router.navigate([category.slug], { relativeTo: this.route })
  }

}
