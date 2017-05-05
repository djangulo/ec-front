import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectivePreloadingStrategy } from './selective-preloading-strategy'

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {
  //   path: 'works',
  //   loadChildren: 'app/works/works.module#WorksModule'
  // },
  // {
  //   path: 'publications',
  //   loadChildren: 'app/publications/publications.module#PublicationsModule'
  // },
  // {
  //   path: 'press',
  //   loadChildren: 'app/press/press.module#PressModule'
  // },
  // {
  //   path: 'staff',
  //   loadChildren: 'app/staff/staff.module#StaffModule'
  // },
  // {
  //   path: 'contact',
  //   loadChildren: 'app/contact/contact.module#ContactModule',
  // },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { preloadingStrategy: SelectivePreloadingStrategy }
    )
  ],
  exports: [ RouterModule ],
  providers: [
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule {}
