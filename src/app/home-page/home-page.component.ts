import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { CountriesService } from '../countries.service';
import { Country } from '../country.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  countriesSearched: Country[];
  countriesForWishlist: Country[] = [];
  getLocal = JSON.parse(localStorage.getItem('wishlist'));

  searchForm: FormGroup;

  constructor(private countriesService: CountriesService) {
    this.countriesForWishlist = this.getLocal ? this.getLocal : [];
  }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'searchInput': new FormControl(null, Validators.required),
    });
  }


  onSubmit() {
    const inputString = this.searchForm.get('searchInput').value;
    this.countriesService.getCountries(inputString);
  }

  onAdd(countryForWishlist) {
    this.countriesForWishlist.push(countryForWishlist);
    localStorage.setItem("wishlist", JSON.stringify(this.countriesForWishlist));
  }

  checkIfExists(countryName) {
    if (this.getLocal) {
      return this.getLocal.includes(countryName);
    } else {
      return false;
    }
  }
}
