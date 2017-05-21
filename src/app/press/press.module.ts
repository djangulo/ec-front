import { PressService } from './press.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PressComponent } from './press.component';
import { PressLatestComponent } from './press-latest/press-latest.component';
import { PressArchiveComponent } from './press-archive/press-archive.component';
import { PressRoutingModule } from './press-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PressRoutingModule
  ],
  declarations: [
    PressLatestComponent,
    PressArchiveComponent,
    PressComponent
  ],
  providers: [
    PressService
  ]
})
export class PressModule { }
