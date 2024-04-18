import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {
  user = {
    name: '',
    email: ''
  };
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(user: any) {
    console.log('User submitted:', user);
  }
}
