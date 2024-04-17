import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PropertiesComponent} from './properties/properties.component';
import {ViewpropertyComponent} from './viewproperty/viewproperty.component';
import { RentalComponent } from './rental/rental.component';

const routes: Routes = [

  { path: 'sales', component: PropertiesComponent },
  {path:'rental' , component:RentalComponent},
  
  {path:'property/:id/:location/:type' , component:ViewpropertyComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PropertyroutingModule { }
