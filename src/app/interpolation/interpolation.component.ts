import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  name = 'John';
  user = { name: 'Alice' };
  showMessage = true;
  items = ['Apple', 'Banana', 'Orange'];
  constructor() { }

  ngOnInit(): void {
  }
  getNameUpperCase() {
    return this.name.toUpperCase();
  }
}
