import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

export interface ChildData {
  name: string;
  value: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:string[]=[];
  items:string ="";
  parentMessage:string=''
  constructor(public router:Router,public service:ServiceService) { }

  ngOnInit(): void {
    this.getData()
  }
  // submit()
  // {
  //   this.router.navigate(["/about"])
  // }
  getData()
  {
    this.data= this.service.getData();
    console.log(this.service.getData())
    console.log(this.data)
  }
  addnewData()
  {
    console.log(this.items);
    this.service.addData(this.items)
  }

  getDataFromChild(event: any) {
    console.log(event);
  }

  handleChildEvent(event: any) {
    console.log('Child event received:', event);
  }

  submit(input:HTMLInputElement)
  {
    this.parentMessage= input.value
  }
}
