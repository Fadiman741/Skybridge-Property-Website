import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './properties/properties.component';


import {PropertyroutingModule} from './property-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PropertyroutingModule
  ],
  declarations: [PropertiesComponent]
})
export class PropertyModule { }
