import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavComponent }   from './nav/nav.component';
import { WorksComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'staff',  component: StaffListComponent },
  { path: 'staff/:username',  component: StaffDetailComponent },
  { path: 'works', component: WorkListComponent },
  { path: 'works/categories/:name', component: WorkByCategoryComponent },
  { path: 'works/:id', component: WorkDetailComponent },
  { path: 'publications/', component: PublicationListComponent },
  { path: 'publications/:id', component: PublicationDetailComponent },
  { path: 'press', component: PressReleaseListComponent },
  { path: 'press/:id', component: PressReleaseDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
