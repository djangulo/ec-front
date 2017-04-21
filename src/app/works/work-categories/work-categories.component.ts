import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';

import { Category } from './../../categories/category.model';
import { WorkService } from './../work.service';
import { Animations } from './../../animations';



@Component({
  templateUrl: './work-categories.component.html',
  styleUrls: ['./work-categories.component.css'
    ],
  animations: [
    Animations.flyIn,
    Animations.deOpacify
  ]
})
export class WorkCategoriesComponent implements OnInit {
  categories: Category[];
  selectedCategory: Category;
  hoveredCategory: Category;
  hoverState: string = 'off';
  
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

  onHover(category: Category): void {
    this.hoveredCategory = category;
    this.hoverState = 'on';
  }
  offHover(): void {
    this.hoveredCategory = null;
    this.hoverState = 'off';
  }



}
