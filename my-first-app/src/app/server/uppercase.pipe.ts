import { PipeTransform } from "@angular/core";

export class Uppercase implements PipeTransform{
    transform(value: string, ...args: any[]) {
      return value.toUpperCase();
    }
}
