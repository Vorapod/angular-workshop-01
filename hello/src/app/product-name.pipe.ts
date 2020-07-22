import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productName'
})
export class ProductNamePipe implements PipeTransform {

  transform(input: string, traget: string): string {
    return input.replace(" ", traget);
  }

}
