import { EventEmitter, Injectable } from "@angular/core";
import { ServiceToInject } from './serviceToInject.service';

@Injectable()
export class LoggingService {
  num=1;
  check = new EventEmitter<number>;
  subjectEmitter = new EventEmitter<number>;
  constructor(private serviceToInject:ServiceToInject){};
  logMessage(message: string) {
    console.log(`message: ${message}`);
    this.serviceToInject.help();
    this.check.emit(112);
  }
}
