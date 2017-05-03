import { Animations } from './animations';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from './categories/category.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    Animations.flyNavIn,
    Animations.flyNavRight,
    Animations.flySecondIn
  ]
})
export class AppComponent implements OnInit {
  homeState: string;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(){
    if(this.location.isCurrentPathEqualTo('/')){
      this.homeState = 'home';
    }else{
      this.homeState = 'other';
    }
  }

  changeState(arg){
    this.homeState = arg;
  }

}
