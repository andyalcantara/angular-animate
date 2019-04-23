import {Component, OnInit} from '@angular/core';
import { TestDirectivesService } from './test-directives.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-animate';

  constructor(
    private testDirectivesService: TestDirectivesService
  ) { }

  ngOnInit(): void {
    this.testDirectivesService.fire.subscribe(result => {
      console.log(result);
    });
  }

}
