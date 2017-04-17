// Core
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { StaffListComponent } from './staff-list/staff-list.component';

const staffRoutes: Routes = [
  { path: 'staff', component: StaffListComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(staffRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StaffRoutingModule { }