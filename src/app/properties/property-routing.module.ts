import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PropertiesComponent} from './properties/properties.component';
const routes: Routes = [

  {path:'rental' , component:PropertiesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PropertyroutingModule { }
