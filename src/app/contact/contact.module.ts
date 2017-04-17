// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Vendor
// ...

// Components

// Routing
import { ContactRoutingModule } from './contact-routing.module';

// Services

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  declarations: [
    ],
  providers: [  ]
})
export class ContactModule { }
