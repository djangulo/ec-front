// Core
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { WorkCategoriesComponent } from './work-categories/work-categories.component';
import { WorkListComponent } from './work-list/work-list.component';

const workRoutes: Routes = [{
  path: 'works/categories',
  component: WorkCategoriesComponent,
  children: [{
    path: ':slug',
    component: WorkListComponent
  }]
}];
@NgModule({
  imports: [
    RouterModule.forChild(workRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class WorkRoutingModule { }