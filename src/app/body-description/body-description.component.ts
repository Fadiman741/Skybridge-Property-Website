import { Component, OnInit } from '@angular/core';

import { faBuilding} from '@fortawesome/free-regular-svg-icons';
import { faBook,faMagnifyingGlassChart,faHouse,faChartSimple} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-body-description',
  templateUrl: './body-description.component.html',
  styleUrls: ['./body-description.component.css']
})
export class BodyDescriptionComponent implements OnInit {

  faBuilding=faBuilding;
  faBook=faBook;
  faMagnifyingGlassChart=faMagnifyingGlassChart;
  faHouse=faHouse;
  faChartSimple=faChartSimple;

  servicesArray:any=[
    { id:1,
      icon:faBuilding,
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
