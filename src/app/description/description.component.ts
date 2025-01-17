import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBuilding} from '@fortawesome/free-regular-svg-icons';
import { faBook,faMagnifyingGlassChart,faHouse,faChartSimple} from '@fortawesome/free-solid-svg-icons';
import { faBed,faBath,faCar,faSquare} from '@fortawesome/free-solid-svg-icons';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {PropertyService} from '../services/property.service'


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  faBuilding=faBuilding;
  faBook=faBook;
  faMagnifyingGlassChart=faMagnifyingGlassChart;
  faHouse=faHouse;
  faChartSimple=faChartSimple;

  faBed=faBed;
  faBath=faBath;
  faCar=faCar;
  faSquare=faSquare;
  propertyList: any;
  propery_for_rental: any;
  rental_property: any;
  sale_property: any;

  constructor(private router:Router,private PropertyService:PropertyService) { }

  ngOnInit() {
    this.Propertylist();
  }

  routeToRental(){
    this.router.navigate(['/rental']);

    

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
  customOptions: OwlOptions = {
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
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }
  
  Propertylist() {
    this.propery_for_rental = this.PropertyService.listProperties;
    console.log(this.PropertyService.listProperties);

    this.rental_property = this.PropertyService.listProperties.filter(item => item.property_type === "rent");
    console.log("Rental Properties", this.rental_property);

    this.sale_property = this.PropertyService.listProperties.filter(item => item.property_type === "sale");


  }

}
