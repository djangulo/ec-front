// Core
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { PublicationCategoriesComponent } from './publication-categories/publication-categories.component';
import { PublicationListComponent } from './publication-list/publication-list.component';

const publicationRoutes: Routes = [{
  path: 'publications/categories',
  component: PublicationCategoriesComponent,
  children: [{
    path: ':slug',
    component: PublicationListComponent
  }]
}];
@NgModule({
  imports: [
    RouterModule.forChild(publicationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PublicationRoutingModule { }