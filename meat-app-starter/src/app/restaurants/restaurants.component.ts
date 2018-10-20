import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../_shared/model/restaurant.model';
import { RestaurantService } from '../_shared/service/restaurant.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(private restaurantService: RestaurantService) {
  }

  ngOnInit() {
    this.restaurants = this.restaurantService.getRestaurants();
  }

}
