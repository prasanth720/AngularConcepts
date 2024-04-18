import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentMessage:string="hello world"
  constructor() { }

  ngOnInit(): void {
  }
  receiveMessage(data:any)
  {
    console.log(data)
  }
}
