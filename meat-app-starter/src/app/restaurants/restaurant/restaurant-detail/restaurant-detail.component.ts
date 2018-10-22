import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../../_shared/model/restaurant.model';
import { RestaurantService } from '../../../_shared/service/restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.restaurantService.getRestaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant);
  }

}
