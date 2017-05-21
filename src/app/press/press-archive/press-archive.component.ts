import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { PressService } from './../press.service';
import { Http } from '@angular/http';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { PressRelease } from './../press.model';
import { Animations } from './../press-animations'
import { AnimationService } from './../../animation.service';

@Component({
  templateUrl: './press-archive.component.html',
  styleUrls: ['./press-archive.component.css'],
  animations: [
    Animations.flyThirdIn
  ]
})
export class PressArchiveComponent implements OnInit {
  subscription: Subscription;
  presses: PressRelease[];
  animLevel: string;
  animState: string;
  dates: any[];
  years: any[]

  constructor(
    private animationService: AnimationService,
    private http: Http,
    private service: PressService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.subscription = animationService.categorySelected$.subscribe(
      level => {
        this.animLevel = 'lvl1';
      });
    this.animState = 'in';
    this.dates = [];
    this.years = [];
  }

  ngOnInit() {
    this.getDates();
  }

  getLatest(): void {
    this.service.getLatestPress()
      .subscribe(presses => this.presses = presses)
  }

  getDates(): void {
    this.service.getPressDates()
      .subscribe(dates => this.dates = dates)
  }

  arrangeDates(): void {

  }


}
