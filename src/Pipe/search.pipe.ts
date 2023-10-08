import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(searchValue: any, args?: any): any {
    if (!searchValue) return null;
    if (!args) return searchValue;

    args = args.toLowerCase();

    return searchValue.filter((item: any) => {
      return JSON.stringify(item).toLowerCase().includes(args);
    })
  }

}