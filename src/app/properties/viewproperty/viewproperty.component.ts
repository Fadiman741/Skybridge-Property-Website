//import { Property } from './../../entities/property.entity';
import { Component, OnInit } from '@angular/core';
import {PropertyService} from '../../services/property.service';
import { ActivatedRoute } from '@angular/router'

import { faBed,faBath,faCar,faHouse,faSquare} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-viewproperty',
  templateUrl: './viewproperty.component.html',
  styleUrls: ['./viewproperty.component.css']
})
export class ViewpropertyComponent implements OnInit {

  faBed=faBed;
  faBath=faBath;
  faCar=faCar;
  faHouse=faHouse;
  faSquare=faSquare;

  propertyId:string="";
  property:string="";

  propertyList  : any[] = [];

  constructor(private PropertyService:PropertyService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.retrievePropertyData()
  }
  retrievePropertyData() {
    this.PropertyService.fetchAll()
      .subscribe(
        data => {
          this.propertyList = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
