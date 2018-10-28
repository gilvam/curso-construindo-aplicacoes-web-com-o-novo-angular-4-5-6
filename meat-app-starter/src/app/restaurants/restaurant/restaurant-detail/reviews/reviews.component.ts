import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantService } from '../../../../_shared/service/restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.reviews = this.restaurantService.getReviewOfRestaurant(this.route.parent.snapshot.params['id']);
  }

}
