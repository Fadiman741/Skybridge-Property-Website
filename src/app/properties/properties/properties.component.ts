
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PropertyService} from '../../services/property.service'
import { Property } from './../../entities/property.entity';
import { faBed,faBath,faCar,faHouse,faSquare} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  faBed=faBed;
  faBath=faBath;
  faCar=faCar;
  faHouse=faHouse;
  faSquare=faSquare;


  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  
  propertyList  : any[] = [];


  constructor(private router:Router ,private PropertyService:PropertyService) { }

  ngOnInit() {
    this.propertyList = this.PropertyService.fetchAll();
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.propertyList;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.propertyList;
  }
  ViewProperty(){
    this.router.navigate(['/property']);
  }

}
