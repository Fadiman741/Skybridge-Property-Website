import { Component, OnInit } from '@angular/core';
import { faPhone,faEnvelope,faSquarePhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-nav',
  templateUrl: './contact-nav.component.html',
  styleUrls: ['./contact-nav.component.css']
})
export class ContactNavComponent implements OnInit {

  faEnvelope=faEnvelope;
  faPhone=faPhone;
  faSquarePhone=faSquarePhone;


  constructor() { }

  ngOnInit() {
  }

}
