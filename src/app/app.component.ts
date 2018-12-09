import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Travel Wishlist';

  constructor(private countriesService: CountriesService) {

  }

  ngOnInit() {
    this.countriesService.getCountries()
    this.countriesService.setCountries();
  }
}
