import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
export interface ChildData {
  name: string;
  value: number;
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit,OnChanges {
  @Input() parentData: string;
  constructor() {
    console.log(this.parentData)
   }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchanges hook called");
    console.log(this.parentData);
  }
}
