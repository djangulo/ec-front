import { Component } from '@angular/core';
@Component({
  template:  `
    <h2>Works</h2>
  <router-outlet></router-outlet>
  <router-outlet name="popup"></router-outlet>
  `
})
export class WorksComponent { }