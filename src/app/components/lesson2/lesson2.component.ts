import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.scss']
})
export class Lesson2Component implements OnInit {

  isHide: boolean = true;
  score: number = 0;

  constructor() { }

  ngOnInit() {
  }

  change() {
    this.isHide = !this.isHide;
  }

}
