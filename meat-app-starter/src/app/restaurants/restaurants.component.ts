import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../_shared/model/restaurant.model';
import { RestaurantService } from '../_shared/service/restaurant.service';
import { subscribeOn } from 'rxjs/operator/subscribeOn';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(private restaurantService: RestaurantService) {
  }

  ngOnInit() {
    this.restaurantService.getRestaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

}
