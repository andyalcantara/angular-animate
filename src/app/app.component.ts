import {Component} from '@angular/core';
import { TestDirectivesService } from './test-directives.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-animate';
  value: boolean;

  constructor(
    private testDirectivesService: TestDirectivesService
  ) {
  }
}
