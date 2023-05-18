import { Injectable } from "@angular/core";
import { ServiceToInject } from './serviceToInject.service';

@Injectable()
export class LoggingService {
  num=1;
  constructor(private serviceToInject:ServiceToInject){};
  logMessage(message: string) {
    console.log(`message: ${message}`);
    this.serviceToInject.help();
  }
}
