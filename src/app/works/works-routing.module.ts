// Core
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { WorkCategoriesComponent } from './work-categories/work-categories.component';

const worksRoutes: Routes = [
  { path: 'works/categories', component: WorkCategoriesComponent }
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