import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Category, CategoryService } from './../../categories';
import { Work } from './../';
import { WorkService } from './../work.service';

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
            .switchMap((params: Params) => this.workService.getWork(+params['id']))
            .subscribe((work: Work) => this.work = work);
    }
    goBack(): void {
        this.location.back();
    }

    // gotoWorkCategory(): void {
    //     let workId = this.work ? this.work.id : null;
    //     let categorySlug = this.work.category_slug;
    //     this.router.navigate(['/works/categories', { category: categorySlug, id: workId }])
    // }
    
}