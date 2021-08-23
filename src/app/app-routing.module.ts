import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Timeline2208Component} from './timeline2208/timeline2208.component';

const routes: Routes = [{
  path: 'timelines',
  component: Timeline2208Component,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
