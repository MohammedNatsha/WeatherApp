import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'substring'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(!value) return null;
    return value.filter(ele =>
    {
      return ele.toLowerCase().includes(args[0].toLowerCase());
    });
  }

}
