import { Component, OnInit } from '@angular/core';

import { faBuilding} from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-body-description',
  templateUrl: './body-description.component.html',
  styleUrls: ['./body-description.component.css']
})
export class BodyDescriptionComponent implements OnInit {

  Building=faBuilding;


  servicesArray:any=[
    { id:1,
      icon:"Building",
      name:"Rental Management"
    },
    { id:2,
      icon:"fas fa-book",
      name:"Body Corporate"
    },
    { id:3,
      icon:"fas fa-key",
      name:"Marketing Services"
    },
    { id:4,
      icon:"fa fa-home",
      name:"Property Sales"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
