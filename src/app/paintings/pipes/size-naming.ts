import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'sizeNaming',
})
export class SizeNaming implements PipeTransform {
  transform(value: string): any {
    switch (value) {
      case 'S': {
        return 'Small';
      }
      case 'M': {
        return 'Medium';
      }
      case 'L': {
        return 'Large';
      }
      case 'X': {
        return 'X-Large';
      }
    }
  }
}
