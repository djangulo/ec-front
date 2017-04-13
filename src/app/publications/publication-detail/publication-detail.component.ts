import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Category, CategoryService } from './../../categories';
import { Publication, PublicationService } from './../';

@Component({
  selector: 'publication-detail',
  templateUrl: './publication-detail.component.html',
  styleUrls: ['./publication-detail.component.css']
})
export class PublicationDetailComponent implements OnInit {
  publication: Publication;

  constructor(
    private publicationService: PublicationService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.publicationService.getPublication(+params['id']))
            .subscribe((publication: Publication) => this.publication = publication);
    }
    goBack(): void {
      this.location.back();
    }
    gotoPublicationCategory(): void {
      let publicationId = this.publication ? this.publication.id : null;
      let categorySlug = this.publication.category_slug;
      this.router.navigate(['/publications/categories', { category: categorySlug, id: publicationId }])
    }

}
