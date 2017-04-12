import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Category, Work } from './../../models';
import { CategoryService, WorkService } from './../../services';

@Component({
    selector: 'work-detail',
    templateUrl: './work-detail.component.html',
    styleUrls: ['./work-detail.component.css']
})
export class WorkDetailComponent implements OnInit {
    work: Work;

    constructor(
        private workService: WorkService,
        private categoryService: CategoryService,
        private router: Router,
        private route: ActivatedRoute,
        private location: Location){ }

    ngOnInit() {
        this.route.params
            // (+) converts string 'id' to a number
            .switchMap((params: Params) => this.workService.getWork(+params['id']))
            .subscribe((work: Work) => this.work = work);
    }
    goBack(): void {
        this.location.back();
    }

    gotoWorkCategory() {
        this.categoryService
        let workId = this.work ? this.work.id : null;
        let catId = this.category
        this.router.navigate(['/works/categories'])
    }
    
}