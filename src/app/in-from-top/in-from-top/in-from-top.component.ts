import {Component, Input, OnInit, Renderer2} from '@angular/core';
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
          transform: 'translateY(-500px)'
        }),
        animate(500)
      ])
    ])
  ]
})
export class InFromTopComponent implements OnInit {

  @Input() inputFromTop: string;
  test = false;
  body: string;

  constructor(
    private render: Renderer2
    ) {
  }

  ngOnInit() {
    this.body = this.inputFromTop;
  }

}

