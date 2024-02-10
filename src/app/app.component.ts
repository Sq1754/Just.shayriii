import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
// import function to register Swiper custom elements
// import { register } from 'swiper/element/bundle';
// register Swiper custom elements
// register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'My Profile', url: 'about', icon: 'person' },
    { title: 'Latest', url: 'membership', icon: 'sparkles' },
    { title: 'Trending', url: 'alumni', icon: 'earth' },
    { title: 'Collection', url: 'membership', icon: 'folder-open' },
    { title: 'Suggestion', url: 'membership', icon: 'add' },
    { title: 'Contact Us', url: 'contact', icon: 'call' }, 
  ];

  public contactDetails = {
    socialMedia: [
      {URL: 'twitter.com', icon:''},
      {URL: 'instragam.com', icon:''},
      {URL: 'facebook.com', icon:''},
      {URL: 'linked.in', icon:''},
    ],
  };
  constructor() {}
}
