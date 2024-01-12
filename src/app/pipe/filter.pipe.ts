import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'propertyFilter'
})
export class PropertyFilterPipe implements PipeTransform {
  transform(properties: any[], filters: any): any[] {
    if (!properties || !filters) {
      return properties;
    }

    return properties.filter(property => {
      return (
        (filters.propertyType === '' || property.property_type === filters.propertyType) &&
        (filters.location === '' || property.province === filters.location) &&
        (filters.propertyType2 === '' || property.type === filters.propertyType2) &&
        (filters.minPrice === '' || parseInt(property.price.replace(/\D/g, '')) >= parseInt(filters.minPrice.replace(/\D/g, ''))) &&
        (filters.maxPrice === '' || parseInt(property.price.replace(/\D/g, '')) <= parseInt(filters.maxPrice.replace(/\D/g, ''))) &&
        (filters.minRooms === '' || property.rooms >= parseInt(filters.minRooms)) &&
        (filters.minBathrooms === '' || property.bathrooms >= parseInt(filters.minBathrooms)) &&
        (filters.garage === '' || property.garage >= parseInt(filters.garage))
      );
    });
  }
}