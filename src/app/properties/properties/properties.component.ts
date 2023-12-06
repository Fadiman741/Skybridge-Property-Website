
import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {PropertyService} from '../../services/property.service'
//import { Property } from './../../entities/property.entity';
import { faBed,faBath,faCar,faHouse,faSquare} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  @Input() filteredPropertyList: any[] = [];

  faBed=faBed;
  faBath=faBath;
  faCar=faCar;
  faHouse=faHouse;
  faSquare = faSquare;
  
  breadCrumbItems: Array<{}> = [];


  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  
  propertyList: any[] = [];
  

  filterParams = {
    propertyType: '',
    location: '',
    propertyTypeFilter: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
    garage: ''
    };


  constructor(private router:Router ,private PropertyService:PropertyService) { }

  ngOnInit() {
    // this.retrievePropertyData()
    // console.log(this.retrievePropertyData())


    // this.Propertylist();
    this.filteredPropertyList = this.PropertyService.listProperties;

    this.breadCrumbItems = [{ label: 'Home' }, { label: 'About', active: true }];

  }
  // retrievePropertyData() {
  //   this.PropertyService.fetchAllProperties()
  //     .subscribe(
  //       data => {
  //         this.propertyList = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
  onTableDataChange(event: any) {
    this.page = event;
    this.propertyList;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.propertyList;
  }
  // ViewProperty(){
  //   this.router.navigate("['/property', property.id, property.province, property.property_type]"]);
  // }
  Propertylist() {
    this.propertyList = this.PropertyService.listProperties;
    console.log(this.PropertyService.listProperties);


  }
  applyFilter() {
    // Implement your filtering logic based on filterParams
    // For simplicity, let's filter by property type and location in this example
    this.filteredPropertyList =  this.PropertyService.listProperties.filter(property => {
      return (
        (this.filterParams.propertyType === '' || property.property_type === this.filterParams.propertyType) &&
        (this.filterParams.location === '' || property.province === this.filterParams.location)
      );
    });
    console.log(this.filteredPropertyList);
  }

}
