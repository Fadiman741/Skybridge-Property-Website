import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import {PropertyModule} from './properties/property.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome' ;  
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { AppComponent } from './app.component';
import { ContactNavComponent } from './contact-nav/contact-nav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyDescriptionComponent } from './body-description/body-description.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { DescriptionComponent } from './description/description.component';
import { SearchbarComponent } from './searchbar/searchbar.component';




@NgModule({
  declarations: [											
    AppComponent,
      ContactNavComponent,
      NavbarComponent,
      BodyDescriptionComponent,
      ContactComponent,
      FooterComponent,
      AboutComponent,
      DescriptionComponent,
      SearchbarComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    PropertyModule

  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
