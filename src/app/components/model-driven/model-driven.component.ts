import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.scss']
})
export class ModelDrivenComponent implements OnInit {

  userForm: FormGroup;

  // userForm = new FormGroup({
  //   name: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
  //   email: new FormControl(),
  //   address: new FormGroup({
  //     street: new FormControl(),
  //     city: new FormControl(),
  //     postalcode: new FormControl(null, Validators.pattern('^[1-9][0-9]{4}'))
  //   })
  // })

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.userForm = this._formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      email: [],
      address: this._formBuilder.group({
        street: [],
        city: [],
        postalcode: [null, Validators.pattern('^[1-9][0-9]{4}')]
      })
    })
  }

  onSubmit() {
    console.log(this.userForm.value);
  }

}
