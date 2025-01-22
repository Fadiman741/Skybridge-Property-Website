import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from '../../services/property.service';
import { faBed, faBath, faCar, faHouse, faSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  @Input() filteredPropertyList: any[] = [];
  faBed = faBed;
  faBath = faBath;
  faCar = faCar;
  faHouse = faHouse;
  faSquare = faSquare;

  breadCrumbItems: Array<{}> = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
  
  propertyList: any[] = [];
  pagedItems: any[] = [];
  pageSize: number = 9;  // Number of items per page
  p = 1;  // Initial page

  filterOptions = {
    propertyType: '',
    location: '',
    minPrice: '',
    maxPrice: '',
    rooms: '',
    bathrooms: '',
    garages: ''
  };


  constructor(private router: Router, private propertyService: PropertyService) { }

  ngOnInit() {
    this.loadProperties();
    this.breadCrumbItems = [{ label: 'Home' }, { label: 'About', active: true }];
  }

  loadProperties() {
    // Assuming PropertyService has a method to fetch properties
    this.propertyList = this.propertyService.listProperties;
    this.filteredPropertyList = this.propertyList.filter(property => property.property_type === "sale");
  }

  setPage(page: number) {
    this.p = page;
    this.pagedItems = this.filteredPropertyList.slice((page - 1) * this.pageSize, page * this.pageSize);
  }

  pageChanged(event: any) {
    this.setPage(event);
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.p = 1;
    this.setPage(this.p);
  }

  applyFilter() {
    const { propertyType, location, minPrice, maxPrice, rooms, bathrooms, garages } = this.filterOptions;
    this.filteredPropertyList = this.filteredPropertyList.filter((property) => {
      return (
        (propertyType ? property.type === propertyType : true) &&
        (location ? property.location === location : true) &&
        (minPrice ? property.price >= minPrice : true) &&
        (maxPrice ? property.price <= maxPrice : true) &&
        (rooms ? property.rooms >= rooms : true) &&
        (bathrooms ? property.bathrooms >= bathrooms : true) &&
        (garages ? property.garages >= garages : true)
      );
    });

    this.p = 1;  // Reset to first page after applying filter
    this.setPage(this.p);
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
        break;
    }

    this.p = 1;  // Reset to first page after sorting
    this.setPage(this.p);
  }

  carouselOptions = {
    items: 1,
    dots: true,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000, // 3 seconds per image
    autoplayHoverPause: true
  };
}
