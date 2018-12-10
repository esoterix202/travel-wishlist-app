import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Country } from './country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  countriesLocal: Country[];
  countriesUrl = '';

  constructor(private http: HttpClient) {

  }

  public getCountries(searchQuery) {
    if (searchQuery) {
      this.countriesUrl = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
      return this.http.get<Country[]>(this.countriesUrl, {
        observe: 'body',
        params: new HttpParams().set('fields', 'name')
      })
        .subscribe(
          (response) => {
            this.countriesLocal = response;
          },
          error => {
            console.log(error);
          }
        );
    }
    else {
      console.log('ERROR');
    }
  }

}
