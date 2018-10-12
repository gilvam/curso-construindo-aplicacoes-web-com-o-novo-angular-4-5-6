import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  name = 'Luke';
  isJedi = true;

  constructor() { }

  ngOnInit() {
  }

}
