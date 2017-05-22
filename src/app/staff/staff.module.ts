// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Vendor
// ...

// Components
import { StaffListComponent } from './staff-list/staff-list.component';

// Routing
import { StaffRoutingModule } from './staff-routing.module';

// Services
import { StaffService } from './staff.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StaffRoutingModule
  ],
  declarations: [
    StaffListComponent
    ],
  providers: [ StaffService ]
})
export class StaffModule { }
