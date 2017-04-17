// Core
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


// Modules
import { PressModule } from './press';
import { PublicationsModule } from './publications';
import { StaffModule } from './staff';
import { WorksModule } from './works';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Services
import { CategoryService } from './categories';
import { StaffService } from './staff';
import { WorkService } from './works';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WorksModule,
    StaffModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  providers: [
    CategoryService,
    StaffService,
    WorkService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
