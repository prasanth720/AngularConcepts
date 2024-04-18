import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TodolistService } from '../todolist.service';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  myForm: FormGroup;
  todos: any[];
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
