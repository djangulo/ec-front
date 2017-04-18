// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Vendor
// ...

// Components
import { ContactComponent } from './contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

// Routing
import { ContactRoutingModule } from './contact-routing.module';

// Services

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactComponent,
    ContactFormComponent
    ]
})
export class ContactModule { }
