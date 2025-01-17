//import { Property } from './../../entities/property.entity';
import { Component, OnInit } from '@angular/core';
import {PropertyService} from '../../services/property.service';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { faBed,faBath,faCar,faHouse,faSquare} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-viewproperty',
  templateUrl: './viewproperty.component.html',
  styleUrls: ['./viewproperty.component.css']
})
export class ViewpropertyComponent implements OnInit {

  // @Input() childData: string;

  faBed=faBed;
  faBath=faBath;
  faCar=faCar;
  faHouse=faHouse;
  faSquare=faSquare;

  propertyId:any;
  property:any;

  propertyList  : any[] = [];

  constructor(private PropertyService:PropertyService,private route: ActivatedRoute) { }

  ngOnInit() {
    // this.retrievePropertyData()


    this.route.params.subscribe(params => {
      const propertyId = +params['id']; // Convert the parameter to a number

      this.property = this.PropertyService.listProperties.find(prop => prop.id === propertyId);
      console.log(this.property);

      if (!this.property) {
        console.error('Property not found');
      }
    });
  }
    carouselOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: true,
      navSpeed: 600,
      navText: ['&#8249', '&#8250;'],
      responsive: {
        0: {
          items: 1 
        },
        
      },
      nav: true
    }
}
