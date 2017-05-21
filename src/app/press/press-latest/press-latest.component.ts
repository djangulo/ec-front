import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { PressService } from './../press.service';
import { Http } from '@angular/http';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { PressRelease } from './../press.model';
import { AnimationService } from './../../animation.service';

@Component({
  selector: 'app-press-latest',
  templateUrl: './press-latest.component.html',
  styleUrls: ['./press-latest.component.css']
})
export class PressLatestComponent implements OnInit {
  subscription: Subscription;
  presses: PressRelease[];
  animLevel: string;

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
  }

  ngOnInit() {
    this.getLatest();
  }

  getLatest(): void {
    this.service.getLatestPress()
      .subscribe(presses => this.presses = presses)
  }


}
