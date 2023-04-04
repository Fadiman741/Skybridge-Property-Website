import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

    propertyData:any=[
    { id:1,
      image:"./assets/profilepictures/mafadi.jpg",
      name:"Rental Management",
      price:"R 200 000",
      province:"Gauteng",
      address: "House 22 Stanza road",
      description: "2 bathrooms Opee area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom pen plan diingroom and lounge area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom",
      rooms:2,
      bathrooms:1,
      garage:1,
      size:1047
    },
    { id:2,
      image:"fas fa-building",
      name:"Rental Management",
      price:"R 200 000",
      province:"Gauteng",
      address: "House 22 Stanza road",
      description: "2 bathrooms Opee area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom pen plan diingroom and lounge area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom",
      rooms:2,
      bathrooms:1,
      garage:1,
      size:1047
    },
    { id:3,
      image:"fas fa-building",
      name:"Rental Management",
      price:"R 200 000",
      province:"Gauteng",
      address: "House 22 Stanza road",
      description: "2 bathrooms Opee area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom pen plan diingroom and lounge area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom",
      rooms:2,
      bathrooms:1,
      garage:1,
      size:1047
    },
    { id:4,
      image:"fas fa-building",
      name:"Rental Management",
      price:"R 200 000",
      province:"Gauteng",
      address: "House 22 Stanza road",
      description: "2 bathrooms Opee area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom pen plan diingroom and lounge area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom",
      rooms:2,
      bathrooms:1,
      garage:1,
      size:1047
    },
    { id:5,
      image:"fas fa-building",
      name:"Rental Management",
      price:"R 200 000",
      province:"Gauteng",
      address: "House 22 Stanza road",
      description: "2 bathrooms Opee area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom pen plan diingroom and lounge area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom",
      rooms:2,
      bathrooms:1,
      garage:1,
      size:1047
    },
    { id:6,
      image:"fas fa-building",
      name:"Rental Management",
      price:"R 200 000",
      province:"Gauteng",
      address: "House 22 Stanza road",
      description: "2 bathrooms Opee area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom pen plan diingroom and lounge area Stacking doors open up to the swimmingpool area Study Kitchen with granite tops Seperate washingroom",
      rooms:2,
      bathrooms:1,
      garage:1,
      size:1047
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
