import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutTheDevComponent } from './about-the-dev.component';

const routes: Routes = [{ path: '', component: AboutTheDevComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutTheDevRoutingModule { }
