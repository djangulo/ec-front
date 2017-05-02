import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { HomeImage } from './home-image.model';
import { HomeImageService } from './home-image.service';


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ HomeImageService ]
})
export class HomeComponent implements OnInit {
  images: HomeImage[];
  currentImage: HomeImage;
  currentImageIndex: number;
  @ViewChild('currentImage') div;

  constructor(
    private homeImageService: HomeImageService,
    private sanitizer: DomSanitizer
  ) {
    setInterval(
      this.div.style.background-image
    )
  }


  ngOnInit() {
    this.getHomeImages();
  }

  getHomeImages(): void {
    this.homeImageService
      .getImages()
      .then((images) => {
        this.images = images;
        this.currentImageIndex = 0;
        this.currentImage = images[this.currentImageIndex];
      });
  }
  getBackground (image) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

}
