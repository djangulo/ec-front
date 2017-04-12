import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  template: `
    <h2>Page not found</h2>
    <a routerLink="/">Home</a>
    <a (click)="goBack()">Go Back</a>
    `
})
export class PageNotFoundComponent {
    constructor(
        private location: Location) { }

    goBack(): void {
        this.location.back();
    }
}