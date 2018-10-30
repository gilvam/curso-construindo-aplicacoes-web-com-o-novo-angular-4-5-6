import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ROUTES } from './app.routes';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantService } from './_shared/service/restaurant.service';
import { RestaurantDetailComponent } from './restaurants/restaurant/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurants/restaurant/restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurants/restaurant/restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurants/restaurant/restaurant-detail/menu/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurants/restaurant/restaurant-detail/reviews/reviews.component';
import { ShoppingCartService } from './_shared/service/shopping-cart.service';
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    RestaurantService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
