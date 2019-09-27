import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmiService {

  height: number = 168;
  weight: number = 45;

  constructor() { }

  get getBMI() {
    return this.weight / (this.height / 100 * this.height / 100)
  }

}
