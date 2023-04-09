import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  routeToRental(){
    this.router.navigate(['/rental']);

  }

}
