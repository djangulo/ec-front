import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PressDetailComponent } from './press-detail/press-detail.component';
import { PressListComponent } from './press-list/press-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PressDetailComponent, PressListComponent]
})
export class PressModule { }
