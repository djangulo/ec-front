// Core
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Services
import {
  CategoryService,
  StaffService
} from './services'

// Components

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    CategoryService,
    StaffService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
