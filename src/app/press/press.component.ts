import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import {
  Component,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';

import { PressService } from './press.service';
import { Animations } from './press-animations';
import { AnimationService } from './../animation.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: './press.component.html',
  styleUrls:     ['./press.component.css'
    ],
  animations: [
    Animations.flySecondIn
  ]
})
export class PressComponent {
  animState: string;


  constructor() {
    this.animState = 'in';
  }

  ngOnInit() {
  }



}
