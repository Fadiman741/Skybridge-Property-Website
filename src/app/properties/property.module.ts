import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './properties/properties.component';
import {FilterComponent} from './filter/filter.component';

import { NgxPaginationModule } from 'ngx-pagination';


import {PropertyroutingModule} from './property-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PropertyroutingModule,
    NgxPaginationModule
  ],
  declarations: [PropertiesComponent,FilterComponent]
})
export class PropertyModule { }
