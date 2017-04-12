// Core
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';

// Modules
import { WorksModule } from './works/works.module';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Services
import {
  CategoryService,
  StaffService
} from './services'



@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WorksModule,
    AppRoutingModule
  ],
  providers: [
    CategoryService,
    StaffService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
