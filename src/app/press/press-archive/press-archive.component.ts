import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PressService } from './../press.service';
import { Http } from '@angular/http';
import { Component, OnInit, OnDestroy } from '@angular/core';

import 'rxjs/add/operator/switchMap';

import { PressRelease, ArchiveDate } from './../press.model';
import { Animations } from './../press-animations'
import { AnimationService } from './../../animation.service';

@Component({
  templateUrl: './press-archive.component.html',
  styleUrls: ['./press-archive.component.css'],
  animations: [
    Animations.flyYearsIn
  ]
})
export class PressArchiveComponent implements OnInit {
  subscription: Subscription;
  animState: string;
  animLevel: string;
  years: ArchiveDate[];

  constructor(
    private animationService: AnimationService,
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
  }

  ngOnInit() {
    this.getDates();
  }

  getDates(): void {
    this.service.getPressDates()
      .subscribe(dates => this.years = dates)
  }


  onSelect(year: ArchiveDate) {
    this.router.navigate([year.year], { relativeTo: this.route})
  }





}
