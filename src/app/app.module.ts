import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lesson1Component } from './components/lesson1/lesson1.component';
import { Lesson2Component } from './components/lesson2/lesson2.component';
import { Lesson3Component } from './components/lesson3/lesson3.component';
import { Homework1Component } from './components/homework1/homework1.component';
import { Lesson4Component } from './components/lesson4/lesson4.component';
import { Lesson5Component } from './components/lesson5/lesson5.component';
import { Lesson7Component } from './components/lesson7/lesson7.component';
import { Lesson8Component } from './components/lesson8/lesson8.component';
import { ModelDrivenComponent } from './components/model-driven/model-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    Lesson1Component,
    Lesson2Component,
    Lesson3Component,
    Homework1Component,
    Lesson4Component,
    Lesson5Component,
    Lesson7Component,
    Lesson8Component,
    ModelDrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
