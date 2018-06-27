// Core
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

// Modules
import { ContactModule } from './contact';
import { PressModule } from './press/press.module';
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
import { AnimationService } from './animation.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ContactModule,
    PublicationsModule,
    WorksModule,
    StaffModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
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
