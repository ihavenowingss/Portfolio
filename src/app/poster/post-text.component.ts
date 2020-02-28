import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
  } from '@angular/animations';

@Component({
  selector: 'app-post-text',
  templateUrl: './post-text.component.html',
  animations: [
    trigger('openClose', [
      state ('open', style({
        left: '14%'
      })),
      state ('closed', style({
        left: '1%'
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ])

    ])
  ]
})


export class PostTextComponent {
  isOpen = true;
  posts = [
    {content: 'first', title: 'first title', src: 'assets/imgs/as.jpg'}
  ];
    toggle() {
    this.isOpen = !this.isOpen;
  }
    call() {
      return this.posts;
    }
}
