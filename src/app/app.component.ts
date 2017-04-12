import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EC Image';
  selectedElem: string;

  selectElem(sel: string): void {
    this.selectedElem = sel;
  }

}
