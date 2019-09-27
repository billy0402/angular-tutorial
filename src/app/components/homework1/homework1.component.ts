import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework1',
  templateUrl: './homework1.component.html',
  styleUrls: ['./homework1.component.scss']
})
export class Homework1Component implements OnInit {

  word: Vocabulary = { english: '', chinese: '' }
  vocabulary: Vocabulary[] = []
  filter: string

  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log(this.word);

    if (this.word.english == '' || this.word.chinese == '') {
      alert("中文或英文尚未輸入")
      return
    }

    let _word: Vocabulary = Object.assign({}, this.word)
    this.vocabulary.push(_word);

    console.log(this.vocabulary);
  }

}

export interface Vocabulary {
  english: string,
  chinese: string
}
