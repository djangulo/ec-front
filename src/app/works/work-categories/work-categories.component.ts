import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  OnDestroy,
  ViewEncapsulation
} from '@angular/core';

import { Category } from './../../categories/category.model';
import { WorkService } from './../work.service';
import { Animations } from './../work-animations';
import { AnimationService } from './../../animation.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: './work-categories.component.html',
  styleUrls:     ['./work-categories.component.css'
    ],
  animations: [
    Animations.deOpacify,
    Animations.flySecondIn,
    Animations.flySecondRight,
    Animations.flyThirdIn
  ]
})
export class WorkCategoriesComponent implements OnInit, OnDestroy {
  categories: Category[];
  selectedCategory: Category;
  hoveredCategory: Category;
  selectionState: string;
  hoverState: string = 'off';
  subscription: Subscription;
  categorySelected: string;
  
  constructor(
    private animationService: AnimationService,
    private workService: WorkService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.subscription = animationService.categorySelected$.subscribe(
      level => {
        this.categorySelected = 'lvl1';
      });
  }

  ngOnInit() {
    this.determineSelectionState();
    this.getCategories();
    console.log(this.selectionState)
  }

  getCategories(): void {
    this.workService
      .getWorkCategories()
      .then(categories => this.categories = categories);
  }
  onSelect(category: Category) {
    this.selectedCategory = category;
    this.router.navigate([category.slug], { relativeTo: this.route })
    this.selectionState = 'selection';
    this.animationService.categorySelected('lvl1');
  }

  determineSelectionState(){
    if(JSON.stringify(this.router.url).split('/')[3] === undefined){
      this.selectionState = 'noSelection';
      this.animationService.categorySelected('lvl0');
    }else{
      this.selectionState = 'selection';
      this.animationService.categorySelected('lvl1');
    }
  }

  onHover(category: Category): void {
    this.hoveredCategory = category;
    this.hoverState = 'on';
  }
  offHover(): void {
    this.hoverState = 'off';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
