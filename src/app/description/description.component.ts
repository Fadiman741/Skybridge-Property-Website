import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBuilding} from '@fortawesome/free-regular-svg-icons';
import { faBook,faMagnifyingGlassChart,faHouse,faChartSimple} from '@fortawesome/free-solid-svg-icons';
import { faBed,faBath,faCar,faSquare} from '@fortawesome/free-solid-svg-icons';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {PropertyService} from '../services/property.service';
import { Meta, Title } from '@angular/platform-browser';


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

  constructor(private router:Router,private PropertyService:PropertyService,private meta: Meta, private title: Title) { }

  ngOnInit() {
    this.Propertylist();
    this.title.setTitle('SkyBridge Property Management | Marketing & Letting');
    this.meta.addTags([
      { name: 'description', content: 'SkyBridge offers marketing, letting, and property management solutions in South Africa' },
      { name: 'keywords', content: 'SkyBridge, property management, marketing, letting, South Africa,pretoria' },
      { name: 'author', content: 'SkyBridge' },
      { property: 'og:title', content: 'SkyBridge Property Management | Marketing & Letting' },
      { property: 'og:description', content: 'SkyBridge offers marketing, letting, and property management solutions in Milnerton, Cape Town.' },
      { property: 'og:image', content: 'https://img.freepik.com/free-vector/smart-home-technology-set-icon_24877-52884.jpg' },
      { property: 'og:url', content: 'https://www.skybridge.com' }
      
    ]);
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
