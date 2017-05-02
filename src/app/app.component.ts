import { ActivatedRoute, Router } from '@angular/router';
import { Animations } from './animations';
import { Category } from './categories/category.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    Animations.flyIn
  ]
})
export class AppComponent {
  selection: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  sel(sel): void {
    this.selection = sel;
  }
  deSelect(): void {
    this.selection = null;
  }
}
