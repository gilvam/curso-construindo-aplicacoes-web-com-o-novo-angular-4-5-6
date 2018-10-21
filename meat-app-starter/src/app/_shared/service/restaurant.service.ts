import { Injectable } from '@angular/core';
import { Restaurant } from '../model/restaurant.model';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { MEAT_API } from '../../app.api';
import 'rxjs/add/operator/map'

@Injectable()
export class RestaurantService {

  constructor(private http: Http) {
  }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json());
  }

}
