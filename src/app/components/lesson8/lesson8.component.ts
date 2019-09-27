import { Component, OnInit } from '@angular/core';
import { BmiService } from '../../services/bmi.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-lesson8',
  templateUrl: './lesson8.component.html',
  styleUrls: ['./lesson8.component.scss']
})
export class Lesson8Component implements OnInit {

  data = {
    "body": '',
    "postId": 0
  }

  constructor(
    private _bmiService: BmiService,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    // let data = {
    //   "body": '',
    //   "postId": 0
    // }
    //
    // this._httpService.postData('http://localhost:3000/comments', data)
    //   .subscribe(
    //     data => {
    //       console.log(data);
    //     },
    //     error => {
    //       console.log(error);
    //     },
    //     () => {
    //       console.log('Finish~');
    //     }
    //   );

    // // RxJS
    // this._httpService.getData('http://localhost:3000/comments')
    //   .subscribe(
    //     // statusCode: 2xx
    //     data => {
    //       console.log(data);
    //     },
    //     // statusCode: not 2xx
    //     error => {
    //       console.log(error);
    //     },
    //     // finish
    //     () => {
    //       console.log('Finish~');
    //     }
    //   );
  }

  sendData() {
    this._httpService.postData('http://localhost:3000/comments', this.data)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        },
        () => {
          console.log('Finish~');
        }
      );
  }

}
