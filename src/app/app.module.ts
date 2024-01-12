import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import {PropertyModule} from './properties/property.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome' ;  
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';


import { AppComponent } from './app.component';
import { ContactNavComponent } from './contact-nav/contact-nav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyDescriptionComponent } from './body-description/body-description.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { DescriptionComponent } from './description/description.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
// import {FilterComponent} from './filter/filter.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NgxPaginationModule } from 'ngx-pagination';





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
      // FilterComponent,
    ReviewsComponent,
      
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    PropertyModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxPaginationModule,


  ],
 // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
