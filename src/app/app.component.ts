import { Animations } from './animations';
import { AnimationService } from './animation.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from './categories/category.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AnimationService],
  animations: [
    Animations.flyNavIn,
    Animations.flyNavRight,
    Animations.flySecondIn
  ]
})
export class AppComponent implements OnInit {
  homeState: string;
  

  constructor(
    private animationService: AnimationService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    animationService.categorySelected$.subscribe(
      level => {this.homeState = level}
    );
  }

  ngOnInit(){
    if(
        this.location.isCurrentPathEqualTo('/') || 
        this.location.isCurrentPathEqualTo('/works/categories') || 
        this.location.isCurrentPathEqualTo('/publications/categories') 
      ){
      this.homeState = 'lvl0';
    }else{
      this.homeState = 'lvl1';
    }
  }

  changeState(arg){
    this.homeState = arg;
    this.animationService.categorySelected(arg);
  }

}
