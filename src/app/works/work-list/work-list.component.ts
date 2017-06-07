import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Animations } from './../work-animations';
import { Category, CategoryService } from './../../categories';
import { Work, WorkPicture } from './../work.model';
import { WorkService } from './../work.service';
import { AnimationService } from './../../animation.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    templateUrl: './work-list.component.html',
    styleUrls: [
        './work-list.component.css',
    ],
    animations: [
      Animations.flyThirdIn,
      Animations.fade,
      Animations.shrinkContainer,
      Animations.dropCaption,
      Animations.showDeets
    ]
})
export class WorkListComponent implements OnInit, OnDestroy {
  works: Work[];
  selectedWork: Work;
  subscription: Subscription;
  @ViewChild('cImgDiv') cImgDiv: ElementRef;
  pictures: WorkPicture[]
  stageCenter: WorkPicture;
  i: number;
  c: number;
  fadeState: string;
  worksState: string;
  detailState: string;
  showDetails: boolean;
  categorySwitched: string;
  animState: string;

  constructor(
    private animationService: AnimationService,
    private workService: WorkService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
    ){
    this.subscription = animationService.categorySwitched$.subscribe();
    animationService.categorySwitched$.subscribe(
      state => {this.categorySwitched = state}
    );
    this.animState = 'in';
    }

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
      default: {
        this.c = 0;
      }
    }
    this.stageCenter = this.pictures[this.c];
    this.fadeState = 'in';
    this.detailState = 'false';
}

  prevPic() {
    this.fadeState = 'out';
    setTimeout(() => {
      switch(this.i){
        case 0: {
          return null;
        }
        default: {
          if(this.c === 0){
            this.c = this.i - 1;
          } else {
            this.c = this.c - 1;
          }
        }
        break;
      }
      this.stageCenter = this.pictures[this.c];
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
        default: {
          if(this.c === this.i - 1){
            this.c = 0;
          } else {
            this.c = this.c + 1;
          }
        }
        break;
      }
      this.stageCenter = this.pictures[this.c];
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

  switchPic(picture: WorkPicture){
    if(this.stageCenter.id === picture.id){
      return ;
    }
    this.fadeState = 'out';
    setTimeout(() => {
      this.stageCenter = picture;
      this.c = this.pictures.indexOf(picture);
      this.updateBackground();
      this.fadeState = 'in';
    }, 300);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
