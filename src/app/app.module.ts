import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import {PropertyroutingModule} from './properties/property-routing.module';


import { AppComponent } from './app.component';
import { ContactNavComponent } from './contact-nav/contact-nav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyDescriptionComponent } from './body-description/body-description.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [							
    AppComponent,
      ContactNavComponent,
      NavbarComponent,
      BodyDescriptionComponent,
      ContactComponent,
      FooterComponent,
      AboutComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PropertyroutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
