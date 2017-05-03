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
    Animations.deOpacify,
    Animations.flySecondIn,
    Animations.flySecondRight,
    Animations.flyThirdIn
  ]
})
export class WorkCategoriesComponent implements OnInit {
  categories: Category[];
  selectedCategory: Category;
  hoveredCategory: Category;
  selectionState: string;
  hoverState: string = 'off';
  
  constructor(
    private workService: WorkService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.determineSelectionState();
    this.getCategories();
    console.log(JSON.stringify(this.router.url).split('/')[3] === undefined)
  }

  getCategories(): void {
    this.workService
      .getWorkCategories()
      .then(categories => this.categories = categories);
  }
  onSelect(category: Category): void {
    this.selectedCategory = category;
    this.router.navigate([category.slug], { relativeTo: this.route })
    this.selectionState = 'selection';
  }

  determineSelectionState(){
    if(JSON.stringify(this.router.url).split('/')[3] === undefined){
      this.selectionState = 'noSelection';
    }else{
      this.selectionState = 'selection';
    }
  }

  onHover(category: Category): void {
    this.hoveredCategory = category;
    this.hoverState = 'on';
  }
  offHover(): void {

    this.hoverState = 'off';
  }



}
