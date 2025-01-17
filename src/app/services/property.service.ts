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
        "https://images.pexels.com/photos/276665/pexels-photo-276665.jpeg"
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
        "https://images.pexels.com/photos/276665/pexels-photo-276665.jpeg"
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
        "https://images.pexels.com/photos/276665/pexels-photo-276665.jpeg"
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
        "https://images.pexels.com/photos/276665/pexels-photo-276665.jpeg"
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
  
  // listProperties: any[]=[
  //     { id:1,
  //       image:"https://images.prop24.com/273080775/Crop508x373",
  //      property_type:"rent",
  //       price:" 6000",
  //       type:"House",
  //       province:"Pretoria central",
  //       address: " 15 Bopape road",
  //       description: "2 bathrooms Opee area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom pen plan diingroom and lounge area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom",
  //       rooms:2,
  //       bathrooms:2,
  //       garage:1,
  //       size:1167
  //     },
  //     { id:2,
  //       image:"https://assets.marketapts.com/assets/converted/262ALV/images/apartments/photos/k5jsvtcrwcmkyo6mxl4sj3ad854v5aex.jpg.800x600.jpg",
  //      property_type:"sale",
  //       type:"Apartment",
  //       price:" 480 000",
  //       province:"Centurion",
  //       address: "026 Mandela Road",
  //       description: "2 bathrooms Opee area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom pen plan diingroom and lounge area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom",
  //       rooms:2,
  //       bathrooms:1,
  //       garage:1,
  //       size:1320
  //     },
  //     { id:3,
  //       image:"https://images.lawpath.com.au/2019/07/stencil.blog-post-feature-15.jpg",
  //       type:"House",
  //      property_type:"sale",
  //       price:" 515 600",
  //       province:"Midrand",
  //       address: "17 Robert Sebokwe road",
  //       description: "2 bathrooms Opee area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom pen plan diingroom and lounge area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom",
  //       rooms:3,
  //       bathrooms:1,
  //       garage:3,
  //       size:1201
  //     },
  //     { id:4,
  //       image:"https://www.homesgofast.com/pmedia/sales/4258653/l/42586530634fd97069b37.jpg",
  //       type:"Apartment",
  //      property_type:"rent",
  //       price:" 5800",
  //       province:"Silver lakes",
  //       address: "23 Seven Seasons",
  //       description: "2 bathrooms Opee area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom pen plan diingroom and lounge area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom",
  //       rooms:3,
  //       bathrooms:3,
  //       garage:3,
  //       size:1297
  //     },
  //     { id:5,
  //       image:"https://cdn.remax.co.za/listings/4228127/original/805244e8-81ab-1a30-98be-55695ff597b7.jpg",
  //       type:"House",
  //      property_type:"rent",
  //       price:" 5100",
  //       province:"Centurion",
  //       address: "!2 Riverside Road",
  //       description: "2 bathrooms Opee area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom pen plan diingroom and lounge area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom",
  //       rooms:4,
  //       bathrooms:4,
  //       garage:4,
  //       size:2147
  //     },
  //     { id:6,
  //       image:"https://adatile.com/wp-content/uploads/2020/06/modern-apartment-buildings-in-a-green-residential-area.jpg",
  //       type:"Apartment",
  //      property_type:"rent",
  //       price:" 4500",
  //       province:"Midrand",
  //       address: "43 Stive biko",
  //       description: "2 bathrooms Opee area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom pen plan diingroom and lounge area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom",
  //       rooms:4,
  //       bathrooms:1,
  //       garage:2,
  //       size:947
  //     },
  //     { id:7,
  //       image:"https://res.cloudinary.com/apartmentlist/image/upload/f_auto,q_auto,t_web-base/13e154d5fa12be668a2b5f3921398b1f.jpg",
  //       type:"Apartment",
  //      property_type:"rent",
  //       price:" 3200",
  //       province:"Centurion",
  //       address: "72 Kalushi",
  //       description: "2 bathrooms Opee area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom pen plan diingroom and lounge area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom",
  //       rooms:2,
  //       bathrooms:1,
  //       garage:2,
  //       size:1047
  //     },
  //     { id:8,
  //       image:"https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
  //       type:"House",
  //      property_type:"rent",
  //       price:" 2700",
  //       province:"Pretoria central",
  //       address: "58 Perterson",
  //       description: "2 bathrooms Opee area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom pen plan diingroom and lounge area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom",
  //       rooms:5,
  //       bathrooms:3,
  //       garage:4,
  //       size:1307
  //   },
  //     { id:9,
  //       image:"https://images.prop24.com/273080775/Crop508x373",
  //      property_type:"sale",
  //       price:"360 000",
  //       type:"House",
  //       province:"Pretoria central",
  //       address: " 15 Bopape road",
  //       description: "2 bathrooms Opee area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom pen plan diingroom and lounge area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom",
  //       rooms:2,
  //       bathrooms:2,
  //       garage:1,
  //       size:1167
  //     },
  //     { id:10,
  //       image:"https://assets.marketapts.com/assets/converted/262ALV/images/apartments/photos/k5jsvtcrwcmkyo6mxl4sj3ad854v5aex.jpg.800x600.jpg",
  //      property_type:"sale",
  //       type:"Apartment",
  //       price:" 580 000",
  //       province:"Centurion",
  //       address: "026 Mandela Road",
  //       description: "2 bathrooms Opee area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom pen plan diingroom and lounge area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom",
  //       rooms:2,
  //       bathrooms:1,
  //       garage:1,
  //       size:1320
  //     },
  //     { id:11,
  //       image:"https://images.lawpath.com.au/2019/07/stencil.blog-post-feature-15.jpg",
  //       type:"House",
  //      property_type:"sale",
  //       price:" 540 000",
  //       province:"Midrand",
  //       address: "17 Robert Sebokwe road",
  //       description: "2 bathrooms Opee area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom pen plan diingroom and lounge area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom",
  //       rooms:3,
  //       bathrooms:1,
  //       garage:3,
  //       size:1201
  //     },
  //     { id:12,
  //       image:"https://www.homesgofast.com/pmedia/sales/4258653/l/42586530634fd97069b37.jpg",
  //       type:"Apartment",
  //      property_type:"sale",
  //       price:" 670 000",
  //       province:"Silver lakes",
  //       address: "23 Seven Seasons",
  //       description: "2 bathrooms Opee area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom pen plan diingroom and lounge area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom",
  //       rooms:3,
  //       bathrooms:3,
  //       garage:3,
  //       size:1297
  //     }
  //   ];
    
  

}
