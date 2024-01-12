
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
  
   pagedItems: any[]=[]
  pageSize = 6 // Number of items per page
  p = 1; // Initial page

   filters: any = {
    propertyType: '',
    location: '',
    propertyType2: '',
    minPrice: '',
    maxPrice: '',
    minRooms: '',
    minBathrooms: '',
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
  // applyFilter() {
  //   // Implement your filtering logic based on filterParams
  //   // For simplicity, let's filter by property type and location in this example
  //   this.filteredPropertyList =  this.PropertyService.listProperties.filter(property => {
  //     return (
  //       (this.filterParams.propertyType === '' || property.property_type === this.filterParams.propertyType) &&
  //       (this.filterParams.location === '' || property.province === this.filterParams.location)
  //     );
  //   });
  //   console.log(this.filteredPropertyList);
  // }
  // applyFilter() {
  //   this.filteredPropertyList = this.PropertyService.listProperties.filter(property => {
  //     return (
  //       (this.filters.propertyType === '' || property.property_type === this.filters.propertyType) &&
  //       (this.filters.location === '' || property.province === this.filters.location) &&
  //       (this.filters.propertyType2 === '' || property.type === this.filters.propertyType2) &&
  //       (this.filters.minPrice === '' || parseInt(property.price.replace(/\D/g, '')) >= parseInt(this.filters.minPrice.replace(/\D/g, ''))) &&
  //       (this.filters.maxPrice === '' || parseInt(property.price.replace(/\D/g, '')) <= parseInt(this.filters.maxPrice.replace(/\D/g, ''))) &&
  //       (this.filters.minRooms === '' || property.rooms >= parseInt(this.filters.minRooms)) &&
  //       (this.filters.minBathrooms === '' || property.bathrooms >= parseInt(this.filters.minBathrooms)) &&
  //       (this.filters.garage === '' || property.garage >= parseInt(this.filters.garage))
  //     );
  //   });
  // }
  setPage(page: number) {
    this.p = page;
    this.pagedItems = this.propertyList.slice((page - 1) * this.pageSize, page * this.pageSize);
  }

  pageChanged(event: any) {
    this.setPage(event);
  }
  filterOptions = {
    propertyType: '',
    location: '',
    propertyCategory: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
    garage: '',
  };
  applyFilter() {
    // Filter based on the selected criteria
    this.filteredPropertyList = this.propertyList.filter((item) => {
      return (
        (this.filterOptions.propertyType === '' || item.propertyType === this.filterOptions.propertyType) &&
        (this.filterOptions.location === '' || item.location === this.filterOptions.location) &&
        (this.filterOptions.propertyCategory === '' || item.propertyCategory === this.filterOptions.propertyCategory) &&
        (this.filterOptions.minPrice === '' || item.price >= +this.filterOptions.minPrice) &&
        (this.filterOptions.maxPrice === '' || item.price <= +this.filterOptions.maxPrice) &&
        (this.filterOptions.bedrooms === '' || item.bedrooms === this.filterOptions.bedrooms) &&
        (this.filterOptions.bathrooms === '' || item.bathrooms === this.filterOptions.bathrooms) &&
        (this.filterOptions.garage === '' || item.garage === this.filterOptions.garage)
      );
    });

    // After filtering, reset the pagination to the first page
    this.p = 1;
  }
  sortProperties(event: any) {
    const selectedSortOption = event.target.value;

    switch (selectedSortOption) {
      case 'dateRecent':
        this.filteredPropertyList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'dateOld':
        this.filteredPropertyList.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'priceLow':
        this.filteredPropertyList.sort((a, b) => a.price - b.price);
        break;
      case 'priceHigh':
        this.filteredPropertyList.sort((a, b) => b.price - a.price);
        break;
      default:
        // Default sorting logic
        break;
    }

    // After sorting, reset the pagination to the first page
    this.p = 1;
  }

}
