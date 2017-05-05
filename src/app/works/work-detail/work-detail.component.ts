import {
  Component,
  HostBinding,
  OnInit,
  Output,
  Input,
  EventEmitter,
  ElementRef,
  ViewChild
} from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Animations } from './../../animations';
import { Work, WorkPicture } from './../work.model';
import { WorkService } from './../work.service';


@Component({
  // selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css']
})
export class WorkDetailComponent implements OnInit {
  @Input() workId: number;
  @Output() closeEvent: EventEmitter<any> = new EventEmitter;
  work: Work;
  @ViewChild('imgDiv') imgDiv: ElementRef;
  stageCenter: WorkPicture;
  stageLeft: WorkPicture;
  stageRight: WorkPicture;
  i: number;
  c: number;
  l: number;
  r: number;
  pictures: WorkPicture[];


  constructor(
    private service: WorkService,
    private router: Router,
    private route: ActivatedRoute
    // private params: Params
  ) { }

  ngOnInit() {
    // this.route.data
    //   .subscribe((data: {work: Work }) => {
    //     this.work
    //   })

  }

  close() {
    this.closeEvent.emit(null)
  }

  // getWork(id: number): void {
  //     this.route.params
  //         .switchMap((params: Params) => this.service.getWork(+params['id']))
  //         .subscribe((work: Work) => this.work = work);
  //   }

  gotoWorks() {
    let categorySlug = this.work ? this.work.category_slug : null;
    this.router.navigate(['/works/categories', { slug: categorySlug }])
  }


  // addBeans() {
  //   for(let i = 0; i < this.pictures.length; i++){
  //     document.querySelector('#lightbox-counter').innerHTML += '<div class="lightbox-counter"></div>'
  //   }
  // }

//   setInitialStage() {
//     this.pictures = [];
//     this.pictures  = this.pictures.concat(
//       this.selectedWork.cover,
//       this.selectedWork.pictures
//     );
//     this.i = this.pictures.length;
//     switch(this.i){
//       case 0: {
//         return null;
//       }
//       case 1: {
//         this.c = 0;
//         this.l = 0;
//         this.r = 0;
//         break;
//       }
//       case 2: {
//         this.c = 0;
//         this.r = 1;
//         this.l = 1;
//         break;
//       }
//       default: {
//         this.c = 0;
//         this.r = 1;
//         this.l = this.i - 1;
//       }
//     }
//     this.stageCenter = this.pictures[this.c];
//     this.stageRight = this.pictures[this.r];
//     this.stageLeft = this.pictures[this.l];
//     this.updateBackground();
// }

// // on lcick left, select left image
// // rotate 3  stages to match new center
// //on click right, select right image
// //deal with less than 3 image cases
// //  single image case
// //  two image case

//   prevPic() {
//     switch(this.i){
//       case 0: {
//         return null;
//       }
//       case 1: {
//         this.c = 0;
//         this.l = 0;
//         this.r = 0;
//         break;
//       }
//       case 2: {
//         if(this.c === 0){
//           this.c = 1;
//         } else {
//           this.c = 0;
//         }
//         if(this.c === 0){
//           this.r = 1;
//           this.l = 1;
//         } else {
//           this.r = 0;
//           this.l = 0;
//         }
//         break;
//       }
//       default: {
//         if(this.c === 1){
//           this.c = this.c - 1;
//           this.r = this.c + 1;
//           this.l = this.i - 1;
//         } else if(this.c === 0){
//           this.c = this.i - 1;
//           this.r = 0;
//           this.l = this.i - 2;
//         } else {
//           this.c = this.c - 1;
//           this.r = this.c + 1;
//           this.l = this.c - 1
//         }
//       }
//       break;
//     }
//     this.stageCenter = this.pictures[this.c];
//     this.stageRight = this.pictures[this.r];
//     this.stageLeft = this.pictures[this.l];
//     this.updateBackground();
//   }
//   nextPic() {
//     switch(this.i){
//       case 0: {
//         return null;
//       }
//       case 1: {
//         this.c = 0;
//         this.l = 0;
//         this.r = 0;
//         break;
//       }
//       case 2: {
//         if(this.c === (this.i - 1)){
//           this.c = 0;
//         } else {
//           this.c = 1;
//         }
//         if(this.c === 0){
//           this.r = 1;
//           this.l = 1;
//         } else {
//           this.r = 0;
//           this.l = 0;
//         }
//         break;
//       }
//       default: {
//         if(this.c === (this.i - 2)){
//           this.c = this.c + 1;
//           this.r = 0;
//           this.l = this.c - 1;
//         } else if(this.c === (this.i - 1)){
//           this.c = 0;
//           this.r = 1;
//           this.l = this.i - 1;
//         } else {
//           this.c = this.c + 1;
//           this.r = this.c + 1;
//           this.l = this.c - 1
//         }
//         break;
//       }
//     }
//     this.stageCenter = this.pictures[this.c];
//     this.stageRight = this.pictures[this.r];
//     this.stageLeft = this.pictures[this.l];
//     this.updateBackground();
//   }

//   scroll(event: KeyboardEvent) {
//     event.preventDefault();
//     if (event.keyCode === 37) {
//       this.prevPic();
//     } else if (event.keyCode === 39){
//       this.nextPic();
//     } else return;
//   }

//   escape(event: KeyboardEvent) {
//     event.preventDefault();
//     if (event.keyCode === 27) {
//       this.deSelect();
//     } else return;
//   }
//   updateBackground(){
//     // this.imgDiv.nativeElement.style.backgroundImage = `url(${this.stageCenter.image})`;
//   }
//   getBackground (image) {
//     return this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);
//   }


}
