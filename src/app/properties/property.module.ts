import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './properties/properties.component';
import {FilterComponent} from './filter/filter.component';
import {ViewpropertyComponent} from './viewproperty/viewproperty.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome' ;   

import { NgxPaginationModule } from 'ngx-pagination';


import {PropertyroutingModule} from './property-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PropertyroutingModule,
    NgxPaginationModule,
    FontAwesomeModule
  ],
  declarations: [PropertiesComponent,FilterComponent,ViewpropertyComponent]
})
export class PropertyModule { }
