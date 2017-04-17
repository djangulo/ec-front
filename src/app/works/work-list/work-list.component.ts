import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Category, CategoryService } from './../../categories';
import { Work } from './../';
import { WorkService } from './../work.service';

@Component({
    selector: 'app-work-list',
    templateUrl: './work-list.component.html',
    styleUrls: ['./work-list.component.css']
})
export class WorkListComponent implements OnInit {
    @Input() category: Category;
    works: Work[];
    selectedWork: Work;

    constructor(
        private workService: WorkService,
        private route: ActivatedRoute,
        private router: Router){ }

    getWorks(): void {
        this.workService.getWorksByCategory(this.category.slug)
            .then(works => this.works = works)
        // this.route.params
        //     .switchMap((params: Params) => this.workService.getWorksByCategory(params['slug']))
        //     .subscribe((works: Work[]) => this.works = works);
    }

    ngOnInit(): void {
        this.getWorks();
    }


}