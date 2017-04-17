// Core
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ContactComponent } from './contact.component';

const contactRoutes: Routes = [
  { path: 'contact', component: ContactComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(contactRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactRoutingModule { }