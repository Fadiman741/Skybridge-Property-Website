import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PropertiesComponent} from './properties/properties.component';
import {ViewpropertyComponent} from './viewproperty/viewproperty.component';

const routes: Routes = [

  {path:'rental' , component:PropertiesComponent},
  {path:'property' , component:ViewpropertyComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PropertyroutingModule { }
