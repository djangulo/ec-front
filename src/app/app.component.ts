import { Component } from '@angular/core';

@Component({
  selector: 'ec-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EC Image';
  selection: string;

  chooseSelection(sel): void {
    return this.selection = sel;
  }

}
