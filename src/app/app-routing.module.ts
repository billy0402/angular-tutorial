import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lesson1Component } from './components/lesson1/lesson1.component';
import { Lesson2Component } from './components/lesson2/lesson2.component';
import { Lesson3Component } from './components/lesson3/lesson3.component';
import { Homework1Component } from './components/homework1/homework1.component';
import { Lesson4Component } from './components/lesson4/lesson4.component';
import { Lesson5Component } from './components/lesson5/lesson5.component';
import { Lesson7Component } from './components/lesson7/lesson7.component';
import { Lesson8Component } from './components/lesson8/lesson8.component';
import { ModelDrivenComponent } from './components/model-driven/model-driven.component';

const routes: Routes = [
  { path: '', redirectTo: 'lesson1', pathMatch: 'full' },
  { path: 'lesson1', component: Lesson1Component },
  { path: 'lesson2', component: Lesson2Component },
  { path: 'lesson3', component: Lesson3Component },
  { path: 'homework1', component: Homework1Component },
  { path: 'lesson4', component: Lesson4Component },
  { path: 'lesson5', component: Lesson5Component },
  { path: 'lesson7', component: Lesson7Component },
  { path: 'lesson8', component: Lesson8Component },
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' },
  { path: 'model-driven', component: ModelDrivenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
