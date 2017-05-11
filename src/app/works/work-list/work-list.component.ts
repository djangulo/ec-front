import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Animations } from './../work-animations';
import { Category, CategoryService } from './../../categories';
import { Work, WorkPicture } from './../work.model';
import { WorkService } from './../work.service';

@Component({
    templateUrl: './work-list.component.html',
    styleUrls: [
        './work-list.component.css',
    ],
    animations: [
      Animations.flyThirdIn,
      Animations.fade,
      Animations.fadeLight,
      Animations.shrinkContainer,
      Animations.dropCaption,
      Animations.showDeets
    ]
})
export class WorkListComponent implements OnInit {
  works: Work[];
  selectedWork: Work;
  @ViewChild('cImgDiv') cImgDiv: ElementRef;
  pictures: WorkPicture[]
  stageCenter: WorkPicture;
  stageLeft: WorkPicture;
  stageRight: WorkPicture;
  i: number;
  c: number;
  l: number;
  r: number;
  fadeState: string;
  detailState: string;
  showDetails: boolean;

  constructor(
    private workService: WorkService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
    ){ }

    ngOnInit(): void {
        this.getWorks();
    }

    getWorks(): void {
        this.route.params
            .switchMap((params: Params) => this.workService.getWorksByCategory(params['slug']))
            .subscribe((works: Work[]) => this.works = works);
    }

    onSelect(work: Work): void {
        this.selectedWork = work;
        this.setInitialStage();
    }

    deSelect(): void {
      this.selectedWork = null;
      this.showDetails = false;
      this.fadeState = 'in';
      this.detailState = 'false';
    }

  toggleDetails() {
    this.showDetails = !this.showDetails;
    this.detailState = JSON.stringify(this.showDetails);
  }

  setInitialStage() {
    this.pictures = [];
    this.pictures  = this.pictures.concat(
      this.selectedWork.cover,
      this.selectedWork.pictures
    );
    this.i = this.pictures.length;
    switch(this.i){
      case 0: {
        return null;
      }
      case 1: {
        this.c = 0;
        this.l = 0;
        this.r = 0;
        break;
      }
      case 2: {
        this.c = 0;
        this.r = 1;
        this.l = 1;
        break;
      }
      default: {
        this.c = 0;
        this.r = 1;
        this.l = this.i - 1;
      }
    }
    this.stageCenter = this.pictures[this.c];
    this.stageRight = this.pictures[this.r];
    this.stageLeft = this.pictures[this.l];
    this.fadeState = 'in';
    this.detailState = 'false';
}

// on lcick left, select left image
// rotate 3  stages to match new center
//on click right, select right image
//deal with less than 3 image cases
//  single image case
//  two image case

  prevPic() {
    this.fadeState = 'out';
    setTimeout(() => {
      switch(this.i){
        case 0: {
          return null;
        }
        case 1: {
          this.c = 0;
          this.l = 0;
          this.r = 0;
          break;
        }
        case 2: {
          if(this.c === 0){
            this.c = 1;
          } else {
            this.c = 0;
          }
          if(this.c === 0){
            this.r = 1;
            this.l = 1;
          } else {
            this.r = 0;
            this.l = 0;
          }
          break;
        }
        default: {
          if(this.c === 1){
            this.c = this.c - 1;
            this.r = this.c + 1;
            this.l = this.i - 1;
          } else if(this.c === 0){
            this.c = this.i - 1;
            this.r = 0;
            this.l = this.i - 2;
          } else {
            this.c = this.c - 1;
            this.r = this.c + 1;
            this.l = this.c - 1
          }
        }
        break;
      }
      this.stageCenter = this.pictures[this.c];
      this.stageRight = this.pictures[this.r];
      this.stageLeft = this.pictures[this.l];
      this.updateBackground();
      this.fadeState = 'in';
    }, 300);

  }
  nextPic() {
    this.fadeState = 'out';
    setTimeout(() => {
      switch(this.i){
        case 0: {
          return null;
        }
        case 1: {
          this.c = 0;
          this.l = 0;
          this.r = 0;
          break;
        }
        case 2: {
          if(this.c === (this.i - 1)){
            this.c = 0;
          } else {
            this.c = 1;
          }
          if(this.c === 0){
            this.r = 1;
            this.l = 1;
          } else {
            this.r = 0;
            this.l = 0;
          }
          break;
        }
        default: {
          if(this.c === (this.i - 2)){
            this.c = this.c + 1;
            this.r = 0;
            this.l = this.c - 1;
          } else if(this.c === (this.i - 1)){
            this.c = 0;
            this.r = 1;
            this.l = this.i - 1;
          } else {
            this.c = this.c + 1;
            this.r = this.c + 1;
            this.l = this.c - 1
          }
          break;
        }
      }
      this.stageCenter = this.pictures[this.c];
      this.stageRight = this.pictures[this.r];
      this.stageLeft = this.pictures[this.l];
      this.updateBackground();
      this.fadeState = 'in';
    }, 300);
  }

  scroll(event: KeyboardEvent) {
    event.preventDefault();
    if (event.keyCode === 37) {
      this.prevPic();
    } else if (event.keyCode === 39){
      this.nextPic();
    } else return;
  }

  escape(event: KeyboardEvent) {
    event.preventDefault();
    if (event.keyCode === 27) {
      this.deSelect();
    } else return;
  }
  updateBackground(){
    this.cImgDiv.nativeElement.style.backgroundImage = `url(${this.stageCenter.image})`;
  }
  getBackground (image) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }


}
