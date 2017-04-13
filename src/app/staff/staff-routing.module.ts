
// Core
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';

const staffRoutes: Routes = [
  { path: 'staff', component: StaffListComponent },
  { path: 'staff/:username', component: StaffDetailComponent },
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