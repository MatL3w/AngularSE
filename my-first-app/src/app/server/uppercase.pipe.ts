import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'Uppercase',
})
export class Uppercase implements PipeTransform {
  transform(value: string, ...args: any[]) {
    return value.toUpperCase();
  }
}
