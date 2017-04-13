import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // { path: 'contact',  component: ContactComponent },
  // { path: 'publications/', component: PublicationListComponent },
  // { path: 'publications/:id', component: PublicationDetailComponent },
  // { path: 'press', component: PressReleaseListComponent },
  // { path: 'press/:id' component: PressReleaseDetailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
