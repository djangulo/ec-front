import { Component } from '@angular/core';
@Component({
  template:  `
    <h2>Works</h2>
    <router-outlet>Loading main...</router-outlet>
    <router-outlet name="popup">Loading popup</router-outlet>
  `
})
export class WorksComponent { }