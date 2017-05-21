// Core
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PressComponent } from './press.component';
import { PressLatestComponent } from './press-latest/press-latest.component';
import { PressArchiveComponent } from './press-archive/press-archive.component';

const pressRoutes: Routes = [
  {
    path: 'press',
    component: PressComponent,
    children: [
      {
        path: 'archive',
        component: PressArchiveComponent,
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