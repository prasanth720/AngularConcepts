import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private data: string[] = [];
  private dataSubject = new BehaviorSubject<string>('Initial Value');
  data$ = this.dataSubject.asObservable();
  constructor() {}
  updateData(data: string) {
    this.dataSubject.next(data);
  }
  getData(): string[] {
    return this.data;
  }
  addData(newData: string) {
    this.data.push(newData);
  }
}
