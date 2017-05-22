// Core
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PressComponent } from './press.component';
import { PressLatestComponent } from './press-latest/press-latest.component';
import { PressArchiveComponent } from './press-archive/press-archive.component';
import { PressArchiveListComponent } from './press-archive/press-archive-list/press-archive-list.component';
import { PressMonthListComponent } from './press-archive/press-month-list/press-month-list.component';

const pressRoutes: Routes = [
  {
    path: 'press',
    component: PressComponent,
    children: [
      {
        path: 'archive',
        component: PressArchiveComponent,
        children: [
          {
            path: ':year',
            component: PressMonthListComponent,
            children: [
              {
                path: ':month',
                component: PressArchiveListComponent
              }
            ]
          }
        ]
      },
      {
          path: 'latest',
          component: PressLatestComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(pressRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PressRoutingModule { }