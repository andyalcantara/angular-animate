import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 7;
  value: boolean;
  timing = '200';

  constructor(
  ) {
  }
}
