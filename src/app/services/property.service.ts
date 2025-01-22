import { Injectable } from '@angular/core';
//import { Property } from '../entities/property.entity';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  baseUrls = "http://127.0.0.1:8000/";
  headers: HttpHeaders = new HttpHeaders;
  constructor(private http: HttpClient) { }



  // fetchAllProperties(): Observable<any> {
    
  //   return this.http.get(this.baseUrls+ "properties/list/");
  // }
  listProperties: any[] = [
    {
      id: 1,
      images: [
        "https://images.prop24.com/273080775/Crop508x373",
        "https://images.prop24.com/273080776/Crop508x373"
      ],
      property_type: "rent",
      price: "6000",
      type: "House",
      category: "Residential",
      tagline: "Modern living in the heart of Pretoria!",
      province: "Pretoria Central",
      address: "15 Bopape Road",
      description: "2 bathrooms, open area, stacking doors open up to the swimming pool area, study, kitchen with granite tops, separate washing room, open plan dining room and lounge area.",
      rooms: 2,
      bathrooms: 2,
      garage: 1,
      size: 1167,
      agent: {
        id: 101,
        name: "John Smith",
        contact: "0712345678",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        socials: {
          facebook: "https://facebook.com/johnsmith",
          instagram: "https://instagram.com/johnsmith",
          linkedin: "https://linkedin.com/in/johnsmith"
        }
      }
    },
    {
      id: 2,
      images: [
        "https://assets.marketapts.com/assets/converted/262ALV/images/apartments/photos/k5jsvtcrwcmkyo6mxl4sj3ad854v5aex.jpg.800x600.jpg",
        "https://assets.marketapts.com/assets/converted/262ALV/images/apartments/photos/secondimage.jpg"
      ],
      property_type: "sale",
      type: "Apartment",
      category: "Residential",
      tagline: "Your perfect apartment awaits!",
      price: "480000",
      province: "Centurion",
      address: "026 Mandela Road",
      description: "2 bathrooms, open area, stacking doors open up to the swimming pool area, study, kitchen with granite tops, separate washing room, open plan dining room and lounge area.",
      rooms: 2,
      bathrooms: 1,
      garage: 1,
      size: 1320,
      agent: {
        id: 102,
        name: "Sarah Lee",
        contact: "0723456789",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        socials: {
          facebook: "https://facebook.com/sarahlee",
          instagram: "https://instagram.com/sarahlee",
          linkedin: "https://linkedin.com/in/sarahlee"
        }
      }
    },
    {
      id: 6,
      images: [
        "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg",
        "https://images.pexels.com/photos/276467/pexels-photo-276467.jpeg"
      ],
      property_type: "sale",
      type: "Office",
      category: "Commercial",
      tagline: "Premium office in the heart of Sandton!",
      price: "3500000",
      province: "Johannesburg",
      address: "33 Rivonia Road",
      description: "Spacious open-plan office with modern facilities and a great view of the city skyline.",
      rooms: 12,
      bathrooms: 4,
      garage: 6,
      size: 8000,
      agent: {
        id: 106,
        name: "David Wilson",
        contact: "0767890123",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
        socials: {
          facebook: "https://facebook.com/davidwilson",
          instagram: "https://instagram.com/davidwilson",
          linkedin: "https://linkedin.com/in/davidwilson"
        }
      }
    },
    {
      id: 7,
      images: [
        "https://images.pexels.com/photos/261146/pexels-photo-261146.jpeg",
        "https://cdn.houseplansservices.com/product/4eat34je4b4208ebguq0ruoekn/w800x533.jpg?v=2"
      ],
      property_type: "rent",
      type: "Penthouse",
      category: "Residential",
      tagline: "Elegant penthouse with ocean views!",
      price: "25000",
      province: "Cape Town",
      address: "12 Sea Point Blvd",
      description: "Luxury penthouse with breathtaking sea views, private rooftop, and modern amenities.",
      rooms: 4,
      bathrooms: 3,
      garage: 2,
      size: 5000,
      agent: {
        id: 107,
        name: "Natalie Adams",
        contact: "0778901234",
        image: "https://randomuser.me/api/portraits/women/7.jpg",
        socials: {
          facebook: "https://facebook.com/natalieadams",
          instagram: "https://instagram.com/natalieadams",
          linkedin: "https://linkedin.com/in/natalieadams"
        }
      }
    },
    {
      id: 1,
      images: [
        "https://images.prop24.com/273080775/Crop508x373",
        "https://images.prop24.com/273080776/Crop508x373"
      ],
      property_type: "rent",
      price: "6000",
      type: "House",
      category: "Residential",
      tagline: "Modern living in the heart of Pretoria!",
      province: "Pretoria Central",
      address: "15 Bopape Road",
      description: "2 bathrooms, open area, stacking doors open up to the swimming pool area, study, kitchen with granite tops, separate washing room, open plan dining room and lounge area.",
      rooms: 2,
      bathrooms: 2,
      garage: 1,
      size: 1167,
      agent: {
        id: 101,
        name: "John Smith",
        contact: "0712345678",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        socials: {
          facebook: "https://facebook.com/johnsmith",
          instagram: "https://instagram.com/johnsmith",
          linkedin: "https://linkedin.com/in/johnsmith"
        }
      }
    },
    {
      id: 2,
      images: [
        "https://assets.marketapts.com/assets/converted/262ALV/images/apartments/photos/k5jsvtcrwcmkyo6mxl4sj3ad854v5aex.jpg.800x600.jpg",
        "https://assets.marketapts.com/assets/converted/262ALV/images/apartments/photos/secondimage.jpg"
      ],
      property_type: "sale",
      type: "Apartment",
      category: "Residential",
      tagline: "Your perfect apartment awaits!",
      price: "480000",
      province: "Centurion",
      address: "026 Mandela Road",
      description: "2 bathrooms, open area, stacking doors open up to the swimming pool area, study, kitchen with granite tops, separate washing room, open plan dining room and lounge area.",
      rooms: 2,
      bathrooms: 1,
      garage: 1,
      size: 1320,
      agent: {
        id: 102,
        name: "Sarah Lee",
        contact: "0723456789",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        socials: {
          facebook: "https://facebook.com/sarahlee",
          instagram: "https://instagram.com/sarahlee",
          linkedin: "https://linkedin.com/in/sarahlee"
        }
      }
    },
    {
      id: 6,
      images: [
        "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg",
        "https://images.pexels.com/photos/276467/pexels-photo-276467.jpeg"
      ],
      property_type: "sale",
      type: "Office",
      category: "Commercial",
      tagline: "Premium office in the heart of Sandton!",
      price: "3500000",
      province: "Johannesburg",
      address: "33 Rivonia Road",
      description: "Spacious open-plan office with modern facilities and a great view of the city skyline.",
      rooms: 12,
      bathrooms: 4,
      garage: 6,
      size: 8000,
      agent: {
        id: 106,
        name: "David Wilson",
        contact: "0767890123",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
        socials: {
          facebook: "https://facebook.com/davidwilson",
          instagram: "https://instagram.com/davidwilson",
          linkedin: "https://linkedin.com/in/davidwilson"
        }
      }
    },
    {
      id: 7,
      images: [
        "https://images.pexels.com/photos/261146/pexels-photo-261146.jpeg",
        "https://cdn.houseplansservices.com/product/4eat34je4b4208ebguq0ruoekn/w800x533.jpg?v=2"
      ],
      property_type: "rent",
      type: "Penthouse",
      category: "Residential",
      tagline: "Elegant penthouse with ocean views!",
      price: "25000",
      province: "Cape Town",
      address: "12 Sea Point Blvd",
      description: "Luxury penthouse with breathtaking sea views, private rooftop, and modern amenities.",
      rooms: 4,
      bathrooms: 3,
      garage: 2,
      size: 5000,
      agent: {
        id: 107,
        name: "Natalie Adams",
        contact: "0778901234",
        image: "https://randomuser.me/api/portraits/women/7.jpg",
        socials: {
          facebook: "https://facebook.com/natalieadams",
          instagram: "https://instagram.com/natalieadams",
          linkedin: "https://linkedin.com/in/natalieadams"
        }
      }
    },
    {
      id: 1,
      images: [
        "https://images.prop24.com/273080775/Crop508x373",
        "https://images.prop24.com/273080776/Crop508x373"
      ],
      property_type: "rent",
      price: "6000",
      type: "House",
      category: "Residential",
      tagline: "Modern living in the heart of Pretoria!",
      province: "Pretoria Central",
      address: "15 Bopape Road",
      description: "2 bathrooms, open area, stacking doors open up to the swimming pool area, study, kitchen with granite tops, separate washing room, open plan dining room and lounge area.",
      rooms: 2,
      bathrooms: 2,
      garage: 1,
      size: 1167,
      agent: {
        id: 101,
        name: "John Smith",
        contact: "0712345678",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        socials: {
          facebook: "https://facebook.com/johnsmith",
          instagram: "https://instagram.com/johnsmith",
          linkedin: "https://linkedin.com/in/johnsmith"
        }
      }
    },
    {
      id: 2,
      images: [
        "https://assets.marketapts.com/assets/converted/262ALV/images/apartments/photos/k5jsvtcrwcmkyo6mxl4sj3ad854v5aex.jpg.800x600.jpg",
        "https://assets.marketapts.com/assets/converted/262ALV/images/apartments/photos/secondimage.jpg"
      ],
      property_type: "sale",
      type: "Apartment",
      category: "Residential",
      tagline: "Your perfect apartment awaits!",
      price: "480000",
      province: "Centurion",
      address: "026 Mandela Road",
      description: "2 bathrooms, open area, stacking doors open up to the swimming pool area, study, kitchen with granite tops, separate washing room, open plan dining room and lounge area.",
      rooms: 2,
      bathrooms: 1,
      garage: 1,
      size: 1320,
      agent: {
        id: 102,
        name: "Sarah Lee",
        contact: "0723456789",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        socials: {
          facebook: "https://facebook.com/sarahlee",
          instagram: "https://instagram.com/sarahlee",
          linkedin: "https://linkedin.com/in/sarahlee"
        }
      }
    },
    {
      id: 6,
      images: [
        "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg",
        "https://images.pexels.com/photos/276467/pexels-photo-276467.jpeg"
      ],
      property_type: "sale",
      type: "Office",
      category: "Commercial",
      tagline: "Premium office in the heart of Sandton!",
      price: "3500000",
      province: "Johannesburg",
      address: "33 Rivonia Road",
      description: "Spacious open-plan office with modern facilities and a great view of the city skyline.",
      rooms: 12,
      bathrooms: 4,
      garage: 6,
      size: 8000,
      agent: {
        id: 106,
        name: "David Wilson",
        contact: "0767890123",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
        socials: {
          facebook: "https://facebook.com/davidwilson",
          instagram: "https://instagram.com/davidwilson",
          linkedin: "https://linkedin.com/in/davidwilson"
        }
      }
    },
    {
      id: 7,
      images: [
        "https://images.pexels.com/photos/261146/pexels-photo-261146.jpeg",
        "https://cdn.houseplansservices.com/product/4eat34je4b4208ebguq0ruoekn/w800x533.jpg?v=2"
      ],
      property_type: "rent",
      type: "Penthouse",
      category: "Residential",
      tagline: "Elegant penthouse with ocean views!",
      price: "25000",
      province: "Cape Town",
      address: "12 Sea Point Blvd",
      description: "Luxury penthouse with breathtaking sea views, private rooftop, and modern amenities.",
      rooms: 4,
      bathrooms: 3,
      garage: 2,
      size: 5000,
      agent: {
        id: 107,
        name: "Natalie Adams",
        contact: "0778901234",
        image: "https://randomuser.me/api/portraits/women/7.jpg",
        socials: {
          facebook: "https://facebook.com/natalieadams",
          instagram: "https://instagram.com/natalieadams",
          linkedin: "https://linkedin.com/in/natalieadams"
        }
      }
    },
    {
      id: 1,
      images: [
        "https://images.prop24.com/273080775/Crop508x373",
        "https://images.prop24.com/273080776/Crop508x373"
      ],
      property_type: "rent",
      price: "6000",
      type: "House",
      category: "Residential",
      tagline: "Modern living in the heart of Pretoria!",
      province: "Pretoria Central",
      address: "15 Bopape Road",
      description: "2 bathrooms, open area, stacking doors open up to the swimming pool area, study, kitchen with granite tops, separate washing room, open plan dining room and lounge area.",
      rooms: 2,
      bathrooms: 2,
      garage: 1,
      size: 1167,
      agent: {
        id: 101,
        name: "John Smith",
        contact: "0712345678",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        socials: {
          facebook: "https://facebook.com/johnsmith",
          instagram: "https://instagram.com/johnsmith",
          linkedin: "https://linkedin.com/in/johnsmith"
        }
      }
    },
    {
      id: 2,
      images: [
        "https://assets.marketapts.com/assets/converted/262ALV/images/apartments/photos/k5jsvtcrwcmkyo6mxl4sj3ad854v5aex.jpg.800x600.jpg",
        "https://assets.marketapts.com/assets/converted/262ALV/images/apartments/photos/secondimage.jpg"
      ],
      property_type: "sale",
      type: "Apartment",
      category: "Residential",
      tagline: "Your perfect apartment awaits!",
      price: "480000",
      province: "Centurion",
      address: "026 Mandela Road",
      description: "2 bathrooms, open area, stacking doors open up to the swimming pool area, study, kitchen with granite tops, separate washing room, open plan dining room and lounge area.",
      rooms: 2,
      bathrooms: 1,
      garage: 1,
      size: 1320,
      agent: {
        id: 102,
        name: "Sarah Lee",
        contact: "0723456789",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        socials: {
          facebook: "https://facebook.com/sarahlee",
          instagram: "https://instagram.com/sarahlee",
          linkedin: "https://linkedin.com/in/sarahlee"
        }
      }
    },
    {
      id: 6,
      images: [
        "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg",
        "https://images.pexels.com/photos/276467/pexels-photo-276467.jpeg"
      ],
      property_type: "sale",
      type: "Office",
      category: "Commercial",
      tagline: "Premium office in the heart of Sandton!",
      price: "3500000",
      province: "Johannesburg",
      address: "33 Rivonia Road",
      description: "Spacious open-plan office with modern facilities and a great view of the city skyline.",
      rooms: 12,
      bathrooms: 4,
      garage: 6,
      size: 8000,
      agent: {
        id: 106,
        name: "David Wilson",
        contact: "0767890123",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
        socials: {
          facebook: "https://facebook.com/davidwilson",
          instagram: "https://instagram.com/davidwilson",
          linkedin: "https://linkedin.com/in/davidwilson"
        }
      }
    },
    {
      id: 7,
      images: [
        "https://images.pexels.com/photos/261146/pexels-photo-261146.jpeg",
        "https://cdn.houseplansservices.com/product/4eat34je4b4208ebguq0ruoekn/w800x533.jpg?v=2"
      ],
      property_type: "rent",
      type: "Penthouse",
      category: "Residential",
      tagline: "Elegant penthouse with ocean views!",
      price: "25000",
      province: "Cape Town",
      address: "12 Sea Point Blvd",
      description: "Luxury penthouse with breathtaking sea views, private rooftop, and modern amenities.",
      rooms: 4,
      bathrooms: 3,
      garage: 2,
      size: 5000,
      agent: {
        id: 107,
        name: "Natalie Adams",
        contact: "0778901234",
        image: "https://randomuser.me/api/portraits/women/7.jpg",
        socials: {
          facebook: "https://facebook.com/natalieadams",
          instagram: "https://instagram.com/natalieadams",
          linkedin: "https://linkedin.com/in/natalieadams"
        }
      }
    }
  ];
}
