// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Vendor

// Components
import { ContactComponent } from './contact.component';

// Routing
import { ContactRoutingModule } from './contact-routing.module';

// Services


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactComponent
    ]
})
export class ContactModule { }
