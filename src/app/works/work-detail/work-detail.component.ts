import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Animations } from './../../animations';
import { Work, WorkPicture } from './../work.model';
import { WorkService } from './../work.service';


@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css']
})
export class WorkDetailComponent implements OnInit {
  @Input() workid: number;
  @Input() workids: number[];
  @Output() closeEvent: EventEmitter<any> = new EventEmitter;
  work: Work;
  stageCenter: WorkPicture;
  stageLeft: WorkPicture;
  stageRight: WorkPicture;
  pictures: WorkPicture[] = [];


  constructor(
    private workService: WorkService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getWork(this.workid);
  }

  close() {
    this.closeEvent.emit(null)
  }

  getWork(id: number): void {
      this.route.params
          .switchMap((params: Params) => this.workService.getWork(+params['id']))
          .subscribe((work: Work) => this.work = work);
      console.log(this.route.params['id'])
      console.log(this.route.params)
    }


  setInitialStage() {
    this.pictures.concat(this.work.cover, this.work.pictures);
    this.stageCenter = this.pictures[0];
    this.stageRight = this.pictures[1];
    // this.stageLeft = this.pictures[(this.pictures.length - 1)];
  }

  addBeans() {
    for(let i = 0; i < this.pictures.length; i++){
      document.querySelector('#lightbox-counter').innerHTML += '<div class="lightbox-counter"></div>'
    }
  }

    // selectStagePic() {
    //     this.stagePic = this.selectedWorkPicArray[0]        
    // }

    // delWorkPicArray(){
    //     this.selectedWorkPicArray = [];
    // }

    // makeWorkPicArray() {
    //     if(this.select // selectStagePic() {
    //     this.stagePic = this.selectedWorkPicArray[0]        
    // }

    // delWorkPicArray(){
    //     this.selectedWorkPicArray = [];
    // }…    //     this.selectStagePic()
    // }edWork.cover.image === null) {
    //         this.selectedWorkPicArray = this.selectedWork.pictures
    //     } else {
    //         this.selectedWorkPicArray.concat(
    //             this.selectedWork.cover,
    //             this.selectedWork.pictures
    //         );
    //     }
    // }

    // nextPic() {
    //     let i = this.selectedWorkPicArray.indexOf(this.stagePic);
    //     if(i === (this.selectedWorkPicArray.length - 1)) {
    //         this.stagePic = this.selectedWorkPicArray[0]
    //     } else {
    //         this.stagePic = this.selectedWorkPicArray[(i + 1)]
    //     }
    // }
    // prevPic() {
    //     let i = this.selectedWorkPicArray.indexOf(this.stagePic);
    //     if(i === 0) {
    //         this.stagePic = this.selectedWorkPicArray[(this.selectedWorkPicArray.length - 1)]
    //     } else {
    //         this.stagePic = this.selectedWorkPicArray[(i - 1)]
    //     }
    // }

    // nextItem() {
    //     let i = this.works.indexOf(this.selectedWork);
    //     if(i === (this.works.length - 1)) {
    //         this.selectedWork = this.works[0]
    //     } else {
    //         this.selectedWork = this.works[(i + 1)]
    //     }
    //     this.delWorkPicArray();
    //     this.makeWorkPicArray();
    //     this.selectStagePic();
    // }

    // prevItem() {
    //     let i = this.works.indexOf(this.selectedWork);
    //     if(i === 0) {
    //         this.selectedWork = this.works[(this.works.length - 1)];
    //     } else {
    //         this.selectedWork = this.works[(i - 1)];
    //     }
    //     this.delWorkPicArray();
    //     this.makeWorkPicArray();
    //     this.selectStagePic()
    // }


}
