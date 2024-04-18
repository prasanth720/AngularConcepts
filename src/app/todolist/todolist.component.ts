import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../todolist.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todos: any[]=[];
today:any = new Date();
price:any=1200
discount:any="12"
myForm: FormGroup;
  constructor(public todoservice:TodolistService, public fb:FormBuilder) {
    this.myForm = this.fb.group({
      firstname:[],
      lastname:[]
      
    })
   }

  ngOnInit(): void {
    this.todoservice.getTodos().subscribe(response => {
      this.todos = response;
    });
  }
  onSubmit()
  {
    console.log(this.myForm.value)
  }
}


