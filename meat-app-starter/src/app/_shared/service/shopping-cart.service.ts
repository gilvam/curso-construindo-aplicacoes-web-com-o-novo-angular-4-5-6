import { CartItem } from '../model/cart-item.model';
import { MenuItem } from '../model/menu-item.model';

export class ShoppingCartService {
  items: CartItem[] = [];

  clear() {
    this.items = [];
  }

  addItem(item: MenuItem) {
    let foundItem = this.items.find((ci: CartItem) => ci.menuItem.id === item.id);

    if (foundItem) {
      // foundItem.quantity = foundItem.quantity + 1;
      foundItem.quantity++;
    }
    else {
      this.items.push(new CartItem(item));
    }
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  total() {
    console.log('this.items: ', this.items);
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => {
        console.log('prev, value: ', prev, value);
        return prev + value;
      }, 0);
  }
}
