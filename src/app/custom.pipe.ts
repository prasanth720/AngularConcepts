import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string, maxLength: number = 7): string {
    if (value.length <= maxLength) {
      return value;
    } else {
      return value.substring(0, maxLength) + '...';
    }
  }
}
