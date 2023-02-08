import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutTheDevRoutingModule } from './about-the-dev-routing.module';
import { AboutTheDevComponent } from './about-the-dev.component';


@NgModule({
  declarations: [
    AboutTheDevComponent
  ],
  imports: [
    CommonModule,
    AboutTheDevRoutingModule
  ]
})
export class AboutTheDevModule { }
