//import { Property } from './../../entities/property.entity';
import { Component, OnInit } from '@angular/core';
import {PropertyService} from '../../services/property.service';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { faBed,faBath,faCar,faHouse,faSquare} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-viewproperty',
  templateUrl: './viewproperty.component.html',
  styleUrls: ['./viewproperty.component.css']
})
export class ViewpropertyComponent implements OnInit {

  // @Input() childData: string;

  faBed=faBed;
  faBath=faBath;
  faCar=faCar;
  faHouse=faHouse;
  faSquare=faSquare;

  propertyId:any;
  property:any;

  propertyList  : any[] = [];
  deposit: number = 0;
  interestRate: number = 7.5; // Default interest rate in %
  loanTerm: number = 20;      // Default loan term in years

  monthlyRepayment: number = 0;
  totalOnceOffCosts: number = 0;
  minGrossIncome: number = 0;

  constructor(private PropertyService:PropertyService,private route: ActivatedRoute) { }

  ngOnInit() {
    // this.retrievePropertyData()


    this.route.params.subscribe(params => {
      const propertyId = +params['id']; // Convert the parameter to a number

      this.property = this.PropertyService.listProperties.find(prop => prop.id === propertyId);
      console.log(this.property);

      if (!this.property) {
        console.error('Property not found');
      }
    });
  }
  calculateBond(): void {
    const loanAmount = this.property.price - this.deposit;
    const monthlyInterestRate = this.interestRate / 100 / 12;
    const numberOfPayments = this.loanTerm * 12;

    // Monthly repayment formula
    this.monthlyRepayment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
                            (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    // Estimated once-off costs (e.g., transfer fees)
    this.totalOnceOffCosts = this.property.price * 0.05;

    // Minimum gross income required (typically 3x monthly repayment)
    this.minGrossIncome = this.monthlyRepayment * 3;
  }
    carouselOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navSpeed: 600,
      navText: ['&#8249', '&#8250;'],
      responsive: {
        0: {
          items: 1 
        },
        
      },
      nav: true
    }
}
