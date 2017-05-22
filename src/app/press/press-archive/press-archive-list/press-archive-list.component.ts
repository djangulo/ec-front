import { Animations } from './../../press-animations';
import { PressRelease } from './../../press.model';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PressService } from './../../press.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-press-archive-list',
  templateUrl: './press-archive-list.component.html',
  styleUrls: ['./press-archive-list.component.css'],
  animations: [
    Animations.flyArchivePressIn
  ]
})
export class PressArchiveListComponent implements OnInit, OnDestroy {
  sub: Subscription;
  year: number;
  month: number;
  presses: PressRelease[];
  animState: string;

  constructor(
    private service: PressService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) {
      this.sub = this.route.parent.params.subscribe(
        params => this.year = +params['year']
      );
      this.animState = 'in';
    }

  ngOnInit() {
    this.getPresses()
  }

  getPresses() {
    this.route.params
      .switchMap(
        (params: Params) => this.service
                              .getPressForMonth(
                                this.year,
                                +params['month']
                              )
      ).subscribe(presses => this.presses = presses); 
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
