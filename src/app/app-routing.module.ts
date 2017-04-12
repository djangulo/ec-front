import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { WorksComponent, WorkDetailComponent } from './works';
import { HeroDetailComponent }  from './hero-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'staff',  component: StaffListComponent },
  { path: 'staff/:username',  component: StaffDetailComponent },
  { path: 'publications/', component: PublicationListComponent },
  { path: 'publications/:id', component: PublicationDetailComponent },
  { path: 'press', component: PressReleaseListComponent },
  { path: 'press/:id', component: PressReleaseDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
