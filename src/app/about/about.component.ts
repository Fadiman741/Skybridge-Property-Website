import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  profileData:any=[
    { id:1,
      profile:"./assets/profilepictures/mafadi.jpg",
      name:"Mafadi Lephaka",
      position:"CEO & Founder",
      about: "Some text that describes me lorem ipsum ipsum lorem."

    },
    { id:2,
      profile:"./assets/profilepictures/mafadi.jpg",
      name:"Mike Ross",
      position:"Agent",
      about: "Some text that describes me lorem ipsum ipsum lorem."

    },
    { id:3,
      profile:"./assets/profilepictures/mafadi.jpg",
      name:"jack",
      position:"Agent",
      about: "Some text that describes me lorem ipsum ipsum lorem."

    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
