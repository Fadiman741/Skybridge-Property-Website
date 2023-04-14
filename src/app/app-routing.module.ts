import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BodyDescriptionComponent} from './body-description/body-description.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from'./about/about.component';



const routes: Routes = [
  {path:'', component:BodyDescriptionComponent},
  {path:'aboutus', component:AboutComponent},

  {path:'contactus', component:ContactComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
    declarations: [ ]
})
export class AppRoutingModule { }
