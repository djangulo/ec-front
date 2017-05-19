import { Animations } from './contact-animations';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    Animations.flySecondIn
  ]
})
export class ContactComponent implements OnInit {
  animState: string;
  constructor() {
    this.animState = 'in';
  }

  ngOnInit() {
  }

}
