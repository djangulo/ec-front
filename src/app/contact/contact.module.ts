// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Vendor

// Components
import { ContactComponent } from './contact.component';

// Routing
import { ContactRoutingModule } from './contact-routing.module';

// Services


@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactComponent
    ]
})
export class ContactModule { }
