import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.scss']
})
export class Lesson1Component implements OnInit {

  title: string = 'This is title.';
  num: number = 100;
  link: string = 'https://www.google.com/';
  money: number = 0;
  tw: number = 0;
  us: number = 0;
  jp: number = 0;

  // 第一次被載入之後
  constructor() { }

  // 載入完成後第一個跑的function
  ngOnInit() {
  }

  test() {
    console.log('Success!' + this.title);
  }

  count() {
    this.us = this.tw * 30;
    this.jp = this.tw / 0.2;
  }

}
