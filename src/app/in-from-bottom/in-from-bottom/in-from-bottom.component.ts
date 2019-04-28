import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-in-from-bottom',
  templateUrl: './in-from-bottom.component.html',
  styleUrls: ['./in-from-bottom.component.sass'],
  animations: [
    trigger('inFromBottom', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(100px)'
        }),
        animate(500)
      ])
    ])
  ]
})
export class InFromBottomComponent implements OnInit {

  @Input() inFromBottom: string;
  value = true;
  body: string;

  constructor() { }

  ngOnInit() {
    this.body = this.inFromBottom;
  }

}
