import { Component, OnInit } from '@angular/core';
import { Country } from '../country.model';

@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.scss']
})
export class WhishlistComponent implements OnInit {

  countriesWishlist: Country[];

  constructor() { }

  ngOnInit() {
  }

}
