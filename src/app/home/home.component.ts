import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { HomeImage } from './home-image.model';
import { HomeImageService } from './home-image.service';

import { Animations } from './../animations';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ HomeImageService ],
  animations: [
    Animations.fade
  ]
})
export class HomeComponent implements OnInit {
  images: HomeImage[];
  currentImage: HomeImage;
  index: number;
  fadeState: string;
  @ViewChild('theDiv') div: ElementRef;

  constructor(
    private homeImageService: HomeImageService,
    private sanitizer: DomSanitizer
  ) {}


  ngOnInit() {
    this.fadeState = 'invisible';
    this.getHomeImages();
  }

  getHomeImages(): void {
    this.homeImageService
      .getImages()
      .then((images) => {
        this.images = images;
        this.index = 0;
        this.currentImage = images[this.index];
        this.updateBackground();
        this.fadeState = 'visible';
      });
  }

  increaseIndex() {
    const i = this.images.length - 1;
    while(this.currentImage.order === 0){
      switch(this.index){
        case i: {this.index = 0}
        default: {this.index++}
      }
    }
    return this.index
  }

  rotateImages() {
    this.currentImage = this.images[this.increaseIndex()]
  }
  updateBackground(){
    this.div.nativeElement.style.backgroundImage = `url(${this.currentImage.image})`;
  }
  getBackground (image) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

}
