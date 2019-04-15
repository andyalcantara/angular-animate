import { Component, Input, OnInit } from '@angular/core';
import { animate, trigger, style, transition, state } from '@angular/animations';

@Component({
  selector: 'app-in-from-top',
  templateUrl: './in-from-top.component.html',
  styleUrls: ['./in-from-top.component.sass'],
  animations: [
    trigger('inFromTop', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(-100px)'
        }),
        animate(500)
      ])
    ])
  ]
})
export class InFromTopComponent implements OnInit {

  @Input() inputFromTop: string;
  test = true;
  body: string;

  constructor() { }

  ngOnInit() {
    this.body = this.inputFromTop;
  }

}

