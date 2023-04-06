import { Component, OnInit } from '@angular/core';
import { faEnvelope} from '@fortawesome/free-regular-svg-icons';
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
  onTableDataChange(event: any) {
    this.page = event;
    this.propertyData;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.propertyData;
  }

}
