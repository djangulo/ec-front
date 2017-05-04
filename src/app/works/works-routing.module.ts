// Core
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { WorkCategoriesComponent } from './work-categories/work-categories.component';
import { WorkListComponent } from './work-list/work-list.component';
import { WorkDetailComponent } from './work-detail/work-detail.component';
import { WorksComponent } from './works.component';

// Services
import { WorkDetailResolver } from './work-detail-resolver.service';


const workRoutes: Routes = [
  {
    path: '',
    component: WorksComponent,
    children: [
      {
        path: 'categories',
        component: WorkCategoriesComponent,
        children: [
          {
            path: ':slug',
            component: WorkListComponent,
            resolve: {
              work: WorkDetailResolver
            }
          }
        ]
      },
      {
        path: ':id',
        component: WorkDetailComponent,
        outlet: 'popup'
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(workRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    WorkDetailResolver
  ]
})
export class WorkRoutingModule { }