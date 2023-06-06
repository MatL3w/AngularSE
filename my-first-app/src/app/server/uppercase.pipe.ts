import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'Uppercase',
  pure: false,
})
export class Uppercase implements PipeTransform {
  transform(value: string, ...args: any[]) {
    return value.toUpperCase();
  }
}
