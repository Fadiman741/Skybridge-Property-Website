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
  fetchAll(): Observable<any> {
    
    return this.http.get(this.baseUrls+ "properties/list/");
  }
  // fetchAll():Property[]{
  //   return[
  //     { id:1,
  //       image:"https://images.prop24.com/273080775/Crop508x373",
  //       name:"Rental Management",
  //       price:"R 200 000",
  //       type:"house",
  //       province:"Pretoria central",
  //       address: "House 22 Stanza road",
  //       description: "2 bathrooms Opee area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom pen plan diingroom and lounge area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom",
  //       rooms:2,
  //       bathrooms:2,
  //       garage:1,
  //       size:1047
  //     },
  //     { id:2,
  //       image:"https://assets.marketapts.com/assets/converted/262ALV/images/apartments/photos/k5jsvtcrwcmkyo6mxl4sj3ad854v5aex.jpg.800x600.jpg",
  //       name:"Rental Management",
  //       type:"apartment",
  //       price:"R 200 000",
  //       province:"Centurion",
  //       address: "House 22 Stanza road",
  //       description: "2 bathrooms Opee area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom pen plan diingroom and lounge area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom",
  //       rooms:2,
  //       bathrooms:1,
  //       garage:1,
  //       size:1047
  //     },
  //     { id:3,
  //       image:"https://images.lawpath.com.au/2019/07/stencil.blog-post-feature-15.jpg",
  //       type:"house",
  //       name:"Rental Management",
  //       price:"R 200 000",
  //       province:"Midrand",
  //       address: "House 22 Stanza road",
  //       description: "2 bathrooms Opee area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom pen plan diingroom and lounge area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom",
  //       rooms:3,
  //       bathrooms:1,
  //       garage:3,
  //       size:1047
  //     },
  //     { id:4,
  //       image:"https://www.homesgofast.com/pmedia/sales/4258653/l/42586530634fd97069b37.jpg",
  //       type:"apartment",
  //       name:"Rental Management",
  //       price:"R 200 000",
  //       province:"Silver lakes",
  //       address: "House 22 Stanza road",
  //       description: "2 bathrooms Opee area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom pen plan diingroom and lounge area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom",
  //       rooms:3,
  //       bathrooms:3,
  //       garage:3,
  //       size:1047
  //     },
  //     { id:5,
  //       image:"https://cdn.remax.co.za/listings/4228127/original/805244e8-81ab-1a30-98be-55695ff597b7.jpg",
  //       type:"house",
  //       name:"Rental Management",
  //       price:"R 200 000",
  //       province:"Centurion",
  //       address: "House 22 Stanza road",
  //       description: "2 bathrooms Opee area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom pen plan diingroom and lounge area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom",
  //       rooms:4,
  //       bathrooms:4,
  //       garage:4,
  //       size:1047
  //     },
  //     { id:6,
  //       image:"https://adatile.com/wp-content/uploads/2020/06/modern-apartment-buildings-in-a-green-residential-area.jpg",
  //       type:"apartment",
  //       name:"Rental Management",
  //       price:"R 200 000",
  //       province:"Midrand",
  //       address: "House 22 Stanza road",
  //       description: "2 bathrooms Opee area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom pen plan diingroom and lounge area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom",
  //       rooms:4,
  //       bathrooms:1,
  //       garage:2,
  //       size:1047
  //     },
  //     { id:5,
  //       image:"https://res.cloudinary.com/apartmentlist/image/upload/f_auto,q_auto,t_web-base/13e154d5fa12be668a2b5f3921398b1f.jpg",
  //       type:"apartment",
  //       name:"Rental Management",
  //       price:"R 200 000",
  //       province:"Centurion",
  //       address: "House 22 Stanza road",
  //       description: "2 bathrooms Opee area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom pen plan diingroom and lounge area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom",
  //       rooms:2,
  //       bathrooms:1,
  //       garage:2,
  //       size:1047
  //     },
  //     { id:6,
  //       image:"https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
  //       type:"house",
  //       name:"Rental Management",
  //       price:"R 200 000",
  //       province:"Pretoria central",
  //       address: "House 22 Stanza road",
  //       description: "2 bathrooms Opee area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom pen plan diingroom and lounge area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom",
  //       rooms:5,
  //       bathrooms:3,
  //       garage:4,
  //       size:1047
  //     }
  //   ];
    
  // }

}
