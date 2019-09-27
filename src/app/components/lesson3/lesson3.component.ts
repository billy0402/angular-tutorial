import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.scss']
})
export class Lesson3Component implements OnInit {

  week: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  users: object[] = [
    { name: 'Billy', sex: 'M' },
    { name: 'Apple', sex: 'F' }
  ]

  scores: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

  now: any = new Date();

  constructor() { }

  ngOnInit() {
  }

}
