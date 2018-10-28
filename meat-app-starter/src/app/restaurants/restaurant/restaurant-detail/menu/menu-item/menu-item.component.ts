import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from '../../../../../_shared/model/menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem;
  @Output() add = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    console.log('menuItem: ', this.menuItem);
  }

  emitAddEvent() {
    this.add.emit(this.menuItem);
  }

}
