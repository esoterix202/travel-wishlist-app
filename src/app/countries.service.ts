import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from './country.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  countriesResponse: Country[];
  countriesUrl = 'https://restcountries.eu/rest/v2/all';

  constructor(private http: HttpClient) {

  }

  public getCountries() {
    return this.http.get<Country[]>(this.countriesUrl, {
      observe: 'body',
      params: new HttpParams().set('fields', 'name')
    })
      .subscribe(
        (response) => {
          this.countriesResponse = response;
        },
      )
  }

  public setCountries() {
    localStorage.setItem("countries", JSON.stringify(this.countriesResponse));
  }

}
