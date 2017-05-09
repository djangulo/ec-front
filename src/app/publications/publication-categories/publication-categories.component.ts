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
import { Animations } from './../publication-animations';

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
  
  constructor(
    private service: PublicationService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.determineSelectionState();
    this.getCategories();
    console.log(this.selectionState)
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
