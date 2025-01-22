import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './properties/properties.component';
import {ViewpropertyComponent} from './viewproperty/viewproperty.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';   
import {FilterComponent} from '../filter/filter.component'

import { NgxPaginationModule } from 'ngx-pagination';


import {PropertyroutingModule} from './property-routing.module';
import { PropertyFilterPipe } from '../pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { RentalComponent } from './rental/rental.component';
  import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@NgModule({
  imports: [
    CommonModule,
    PropertyroutingModule,
    NgxPaginationModule,
    FontAwesomeModule,
    CarouselModule,
    FormsModule
  ],
  declarations: [PropertiesComponent,RentalComponent,ViewpropertyComponent,FilterComponent,  PropertyFilterPipe]
})
export class PropertyModule { }
