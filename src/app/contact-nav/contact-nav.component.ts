import { Component, OnInit } from '@angular/core';
import { faEnvelope} from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-nav',
  templateUrl: './contact-nav.component.html',
  styleUrls: ['./contact-nav.component.css']
})
export class ContactNavComponent implements OnInit {

  faEnvelope=faEnvelope;
  faPhone=faPhone;


  constructor() { }

  ngOnInit() {
  }

}
