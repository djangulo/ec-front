import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Category } from './../../categories/category.model';
import { PublicationService } from './../publication.service';

@Component({
  templateUrl: './publication-categories.component.html',
  styleUrls: ['./publication-categories.component.css']
})
export class PublicationCategoriesComponent implements OnInit {
  categories: Category[];
  selectedCategory: Category;

  constructor(
    private publicationService: PublicationService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.publicationService
      .getPublicationCategories()
      .then(categories => this.categories = categories);
  }
  onSelect(category: Category): void {
    this.selectedCategory = category;
    this.router.navigate([category.slug], { relativeTo: this.route })
  }

}
