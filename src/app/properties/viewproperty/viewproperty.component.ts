import { Component, OnInit } from '@angular/core';
import {PropertyService} from '../../services/property.service'

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

  propertyList  : any[] = [];

  constructor(private PropertyService:PropertyService) { }

  ngOnInit() {
    this.propertyList = this.PropertyService.fetchAll();
  }

}
