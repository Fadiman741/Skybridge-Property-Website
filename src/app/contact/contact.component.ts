import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Get in Touch');
    this.meta.addTags([
      { name: 'description', content: 'Contact us for inquiries, support, or collaborations. We are here to help you with any questions.' },
      { name: 'keywords', content: 'Contact, Support, Inquiries, Help, Customer Service' },
      { property: 'og:title', content: 'Contact Us | Get in Touch' },
      { property: 'og:description', content: 'Reach out to us for any questions or support you need.' },])
      // { property: 'og:image', content: '/assets/contact-us-preview.png' }])
      // const jsonLd = {
      //   "@context": "http://schema.org",
      //   "@type": "LocalBusiness",
      //   "name": "Your Business Name",
      //   "address": {
      //     "@type": "PostalAddress",
      //     "streetAddress": "123 Your Street",
      //     "addressLocality": "Your City",
      //     "addressRegion": "Your State",
      //     "postalCode": "12345",
      //     "addressCountry": "Your Country"
      //   },
      //   "telephone": "+123 456 7890",
      //   "email": "contact@yourdomain.com",
      //   "url": "https://www.yourdomain.com",
      //   "logo": "https://www.yourdomain.com/logo.png"
      // };
      // this.meta.addTag({ name: 'json-ld', content: JSON.stringify(jsonLd) });
  }

}
