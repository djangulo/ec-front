import { PressService } from './press.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PressComponent } from './press.component';
import { PressLatestComponent } from './press-latest/press-latest.component';
import { PressArchiveComponent } from './press-archive/press-archive.component';
import { PressRoutingModule } from './press-routing.module';
import { PressArchiveListComponent } from './press-archive/press-archive-list/press-archive-list.component';
import { PressMonthListComponent } from './press-archive/press-month-list/press-month-list.component';

@NgModule({
  imports: [
    CommonModule,
    PressRoutingModule
  ],
  declarations: [
    PressLatestComponent,
    PressArchiveComponent,
    PressComponent,
    PressArchiveListComponent,
    PressMonthListComponent
  ],
  providers: [
    PressService
  ]
})
export class PressModule { }
