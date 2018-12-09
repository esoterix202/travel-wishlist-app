import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { CountriesService } from '../countries.service';
import { Country } from '../country.model';
import { WhishlistService } from '../whishlist.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  countriesSearched: Country[];

  countriesReceived: Country[];

  searchForm: FormGroup;

  constructor(private countriesService: CountriesService,
              private wishlistService: WhishlistService) {

  }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'searchInput': new FormControl(null, Validators.required),
    });
  }

  receiveCountries() {
    this.countriesReceived = this.countriesService.countriesResponse.slice();
  }


  onSubmit() {
    this.receiveCountries();
    console.log(this.countriesReceived);
    const inputString = this.searchForm.get('searchInput').value;
    // for (let country of this.countriesArrived) {
    //   if (country.name.includes(inputString)) {
    //     this.countriesSearched.push(country);
    //   }
    // }
    this.countriesSearched = this.countriesReceived.filter(country => {
      return country.name.includes(inputString);
    })
  }

  onAdd(countryForWishlist) {

  }
}
