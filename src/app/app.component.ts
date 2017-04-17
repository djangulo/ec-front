import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selection: string;

  select(sel): void {
    this.selection = sel;
  }
  deSelect(): void {
    this.selection = null;
  }

}
