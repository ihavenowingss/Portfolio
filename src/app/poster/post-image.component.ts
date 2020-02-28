import { Component, Injectable } from '@angular/core';
import { PostTextComponent } from './post-text.component';
import {
  trigger,
  state,
  style,
  transition,
  animate
  } from '@angular/animations';

@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.component.html',
  animations: [
    trigger('UpDown', [
      state('above', style({
        top: '-100%'
      })),
      state('inFocus', style({
        top: '0%'
      })),
      state('below', style({
        top: '100%'
      })),
      transition('above <=> inFocus', [
        animate('0.5s')
      ]),
      transition('inFocus <=> below', [
        animate('0.5s')
      ])
    ])
  ]

})
export class PostImageComponent {
  posts = [
    {content: 'first', title: 'first title', src: 'assets/imgs/as.jpg'},
    {content: 'Second', title: 'Second title', src: 'assets/imgs/Sword_sword.png'}
  ];
 n: number;
list: boolean[] = [true, false];
values(){
  Array
}
constructor(){
  this.n = this.posts.length;
}
}
