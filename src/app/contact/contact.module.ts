// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Vendor
import { ReCaptchaModule } from './recaptcha/recaptcha.module';

// Components
import { ContactComponent } from './contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

// Routing
import { ContactRoutingModule } from './contact-routing.module';

// Services
import { ContactService } from './contact-form.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactRoutingModule,
    ReCaptchaModule
  ],
  declarations: [
    ContactComponent,
    ContactFormComponent
    ],
  providers: [
    ContactService
  ]
})
export class ContactModule { }
