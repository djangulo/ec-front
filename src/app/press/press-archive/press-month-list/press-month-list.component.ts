import { Animations } from './../../press-animations';
import { Subscription } from 'rxjs/Subscription';
import { ArchiveDate } from './../../press.model';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PressService } from './../../press.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-press-month-list',
  templateUrl: './press-month-list.component.html',
  styleUrls: ['./press-month-list.component.css'],
  animations: [
    Animations.flyMonthsIn
  ]
})
export class PressMonthListComponent implements OnInit, OnDestroy {
  year: number;
  months: any[];
  sub: Subscription;
  animState: string;

  constructor(
    private service: PressService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) {
      this.sub = this.route.params.subscribe(
        params => this.year = +params['year']);
        this.animState = 'in';
    }

  ngOnInit() {
    this.getMonths();
  }

  getMonths() {
    this.service.getPressDates()
      .subscribe(dates => {
        for(let i of dates){
          if(i.year === this.year){
            this.months = i.months
          }
        }
      });
  }

  onSelect(month: number){
    this.router.navigate([month], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // getArchivedPresses() {
  //   this.route.params
  //     .switchMap((params: Params) => this.service.getPressForMonth(+params['year'], +params['month']) )
  //     .subscribe(presses => this.presses = presses);
  // }
}
