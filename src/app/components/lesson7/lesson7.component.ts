import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-lesson7',
  templateUrl: './lesson7.component.html',
  styleUrls: ['./lesson7.component.scss']
})
export class Lesson7Component implements OnInit {

  // DI(Dependency Injection)
  constructor(
    private _carService: CarService
  ) { }

  ngOnInit() {
    console.log(this._carService.carPrice);
  }

}
