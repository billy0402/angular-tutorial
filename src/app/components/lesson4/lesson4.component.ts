import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lesson4',
  templateUrl: './lesson4.component.html',
  styleUrls: ['./lesson4.component.scss']
})
export class Lesson4Component implements OnInit {

  @Input() money: number = 0;
  @Output() moneyChange: EventEmitter<number> = new EventEmitter<number>();

  account: Account = {
    account: "test",
    password: "p@ssw0rd"
  }

  accounts: Account[] = [
    {
      account: "test1",
      password: "p@ssw0rd"
    },
    {
      account: "test2",
      password: "p@ssw0rd"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

// 加上export 其他component才吃得到
export interface Account {
  account: string,
  password: string,
  email?: string
}
