import { DomSanitizer } from '@angular/platform-browser';
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
import { PublicationService } from './../publication.service';
import { HomeTextService } from './../../home/home-text.service';
import { Animations } from './../publication-animations';
import { AnimationService } from './../../animation.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: './publication-categories.component.html',
  styleUrls:     ['./publication-categories.component.css'
    ],
  animations: [
    Animations.deOpacify,
    Animations.flySecondIn,
    Animations.flySecondRight,
    Animations.flyThirdIn
  ]
})
export class PublicationCategoriesComponent implements OnInit {
  categories: Category[];
  selectedCategory: Category;
  hoveredCategory: Category;
  selectionState: string;
  hoverState: string = 'off';
  catSub: Subscription;
  switchSub: Subscription;
  categorySelected: string;
  homeText: string;
  
  constructor(
    private animationService: AnimationService,
    private homeTextService: HomeTextService,
    private service: PublicationService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private sanitizer: DomSanitizer
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

  safeHTML(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  getCategories(): void {
    this.service
      .getPublicationCategories()
      .then(categories => this.categories = categories);
  }
  onSelect(category: Category): void {
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



}
