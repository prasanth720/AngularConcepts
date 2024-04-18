import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lifehooks',
  templateUrl: './lifehooks.component.html',
  styleUrls: ['./lifehooks.component.css']
})
export class LifehooksComponent implements OnInit,OnChanges, DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit {
  @Input() childMessage: string = '';
  changesDetected: number = 0;
  @ViewChild('myDiv') myDiv: ElementRef;
  message: string = 'Component is alive';
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges() {
    console.log('Input value changed:', this.childMessage);
  }
  ngDoCheck() {
    console.log('Input value changed:', this.childMessage);
  }

  ngAfterContentInit() {
    console.log('Content initialized');
    console.log('Input value changed:', this.childMessage);
  }
  ngAfterContentChecked() {
    console.log('Content checked');
    console.log('Input value changed:', this.childMessage);
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
    console.log('Input value changed:', this.childMessage);
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.log('Input value changed:', this.childMessage);
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
    console.log('Input value changed:', this.childMessage);
  }

}
