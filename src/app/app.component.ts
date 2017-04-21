import { ActivatedRoute, Router } from '@angular/router';
import { Animations } from './animations';
import { Category } from './categories/category.model';
import { Component, OnInit } from '@angular/core';

import { WorkService } from './works/work.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    WorkService
  ],
  animations: [
    Animations.flyInFromBelow,
    Animations.swapRightFirst
  ]
})
export class AppComponent implements OnInit {
  selection: string;
  state: string = 'inactive';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit() {
    console.log(this.router.url, this.router.url !== '/')
    if(this.router.url !== '/'){
      this.state = 'active'
    }
  }

  select(sel): void {
    this.selection = sel;
  }
  deSelect(): void {
    this.selection = null;
  }

  toggleState(state: string) {
    this.state = state;
  }




}
