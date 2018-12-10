import { Component, OnInit } from '@angular/core';
import { Country } from '../country.model';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  countriesWishlist: Country[];


  constructor() {
    this.countriesWishlist = JSON.parse(localStorage.getItem('wishlist'));
  }

  ngOnInit() {

  }

  onRemove(country) {
    let local = JSON.parse(localStorage.getItem('wishlist'));

    for (let index = 0; index < local.length; index++) {
      const element = local[index];
      if(element === country) {
        local.splice(index, 1);
      }
    }

    this.countriesWishlist = local;
    local = JSON.stringify(local);

    localStorage.setItem("wishlist", local);
}

}
