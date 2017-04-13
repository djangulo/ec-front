// Core
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { WorkListComponent } from './work-list/work-list.component';
import { WorkDetailComponent } from './work-detail/work-detail.component';

const worksRoutes: Routes = [
  // { path: 'works',  component: WorkListComponent },
  { path: 'works/:id', component: WorkDetailComponent },
  { path: 'works/categories/:slug', component: WorkListComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(worksRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class WorkRoutingModule { }