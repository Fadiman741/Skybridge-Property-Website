import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  

  filteredPropertyList :any; 

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
  


  constructor( private PropertyService:PropertyService) { }

  ngOnInit() {
    this.filteredPropertyList = this.PropertyService.listProperties;
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
  }
  

}
