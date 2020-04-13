import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'Sunset',
      url: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
      title: 'Mountains and lake',
      url: 'https://images.pexels.com/photos/870711/pexels-photo-870711.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
      title: 'Funny birds',
      url: 'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
      title: 'Wooden bridge',
      url: 'https://images.pexels.com/photos/234510/pexels-photo-234510.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
      title: 'Purple silk flowers',
      url: 'https://images.pexels.com/photos/794494/pexels-photo-794494.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
      title: 'Colorful peacock',
      url: 'https://images.pexels.com/photos/53184/peacock-bird-plumage-color-53184.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    {
      title: 'Seashore',
      url: 'https://images.pexels.com/photos/210205/pexels-photo-210205.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
  ];
}
