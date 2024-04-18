import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  message = 'Hello, World!';
  message1 ="prasanth sankurabothu 12345"
  currentDate = new Date();
  price = 99.99;
  amount = 12345.6789;

  constructor() { }

  ngOnInit(): void {

  }

}
