import { Component, OnInit } from '@angular/core';
import { faLayerGroup,faEnvelope,faMemory} from '@fortawesome/free-solid-svg-icons';
import { Meta, Title } from '@angular/platform-browser';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  faLayerGroup=faLayerGroup;
  faEnvelope=faEnvelope;
  faMemory=faMemory;


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
  constructor(private meta: Meta, private title: Title) { }

  ngOnInit() {
    // Set page title
    this.title.setTitle('SkyBridge Property Management | Rentals, Sales, and Full-Service Property Solutions');

    // Add meta tags
    this.meta.addTags([
      { name: 'description', content: 'SkyBridge Property Management offers technology-driven property solutions, including rentals, sales, body corporate management, and more. Serving Johannesburg and Pretoria, we provide personalized services to maximize your property investments.' },
      { name: 'keywords', content: 'SkyBridge, property management, rentals, sales, body corporate, property solutions, Johannesburg, Pretoria, sustainable living, property investors, real estate services, tenant management' },
      { name: 'author', content: 'SkyBridge' },
      { property: 'og:title', content: 'SkyBridge Property Management | Rentals, Sales, and More' },
      { property: 'og:description', content: 'SkyBridge offers personalized property management solutions, leveraging advanced technology to maximize your investment returns.' },

    ]);
  }

}
