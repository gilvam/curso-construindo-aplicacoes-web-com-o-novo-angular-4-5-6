import { Component } from '@angular/core';
import { Student } from './student/student';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jedi-academy';
  students = [
    { name: 'Luke', isJedi: true, temple: 'Cruscant' },
    { name: 'Han Solo', isJedi: false },
    { name: 'Leia', isJedi: false },
  ];
}
