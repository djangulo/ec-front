import { DomSanitizer } from '@angular/platform-browser';
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
  templateUrl: './press-latest.component.html',
  styleUrls: ['./press-latest.component.css'],
  animations: [
    Animations.flySecondIn,
    Animations.flyLatestPressIn
  ]
})
export class PressLatestComponent implements OnInit {
  subscription: Subscription;
  presses: PressRelease[];
  animLevel: string;
  animState: string;

  constructor(
    private animationService: AnimationService,
    private http: Http,
    private service: PressService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private sanitizer: DomSanitizer
  ) {
    this.subscription = animationService.categorySelected$.subscribe(
      level => {
        this.animLevel = 'lvl1';
      });
    this.animState = 'in';
  }

  ngOnInit() {
    this.getLatest();
  }

  safeHTML(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  getLatest(): void {
    this.service.getLatestPress()
      .subscribe(presses => this.presses = presses)
  }


}
