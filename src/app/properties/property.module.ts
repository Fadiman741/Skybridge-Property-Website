import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './properties/properties.component';
import {FooterComponent} from '../footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PropertiesComponent,FooterComponent]
})
export class PropertyModule { }
