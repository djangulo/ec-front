// Core
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


// Modules
import { ContactModule } from './contact';
import { PressModule } from './press';
import { PublicationsModule } from './publications';
import { StaffModule } from './staff';
import { WorksModule } from './works';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Services
import { CategoryService } from './categories/category.service';
import { PublicationService } from './publications/publication.service';
import { StaffService } from './staff/staff.service';
import { WorkService } from './works/work.service';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ContactModule,
    PublicationsModule,
    WorksModule,
    StaffModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ContactComponent,
    ContactFormComponent
  ],
  providers: [
    CategoryService,
    PublicationService,
    StaffService,
    WorkService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
