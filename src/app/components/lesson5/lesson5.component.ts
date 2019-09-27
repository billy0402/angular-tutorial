import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lesson5',
  templateUrl: './lesson5.component.html',
  styleUrls: ['./lesson5.component.scss']
})
export class Lesson5Component implements OnInit {

  // Input 父傳子(外面傳進來) 
  // Output 子傳父(裡面傳出去)
  @Input() id: string = 'Hello';
  @Input('account') name: string;
  money: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
