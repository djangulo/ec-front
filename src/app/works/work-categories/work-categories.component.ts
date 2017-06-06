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
import { HomeTextService } from './../../home/home-text.service';
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
  catSub: Subscription;
  switchSub: Subscription;
  categorySelected: string;
  categorySwitched: string;
  homeText: string;
  
  constructor(
    private animationService: AnimationService,
    private homeTextService: HomeTextService,
    private workService: WorkService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.catSub = animationService.categorySelected$.subscribe(
      level => {
        this.categorySelected = level;
      });
    this.switchSub = animationService.categorySwitched$.subscribe(
      origin => {
        if(origin !== null){
          this.selectionState = 'noSelection';
        }else{
          this.selectionState = 'selection';
        }
      });
  }

  ngOnInit() {
    this.determineSelectionState();
    this.getCategories();
    this.getHomeText();
  }

  getHomeText(): void {
    this.homeTextService.getText()
            .then((text) => this.homeText = text);
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
    this.catSub.unsubscribe();
    this.switchSub.unsubscribe();
  }



}
