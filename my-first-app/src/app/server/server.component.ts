import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoggingService } from '../logging.service';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  providers:[LoggingService],
})
export class ServerComponent {
  @ViewChild('buttonWithReference') buttonWithReference:ElementRef;
  variableToBindNr1: string = '';
  booleanToToggle = false;
  booleanToToggleUsingDirective = false;
  opacity = 0.5;
  numberOfExchangesTable: number = 0;
  maxNumberOfExchangesTable: string = '';
  informationAboutExchanges: string = '';
  ngForCounter: number = 0;
  ngForCounterArray: Array<any> = [];
  backgroundColorngClass=true;
  valueForNgSwitch = 0;

  constructor(private loggingService:LoggingService) {}
  async onVariableChange(newValue: any) {
    const headers = new Headers();
    await fetch('https://data.binance.com/api/v3/ticker/24hr', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        this.maxNumberOfExchangesTable = (res.length - 1).toString();
        this.informationAboutExchanges = JSON.stringify(
          res[this.numberOfExchangesTable]
        );
      });
  }
  toggleBoolean() {
    this.booleanToToggle = !this.booleanToToggle;
    this.loggingService.logMessage('invoked toggleBoolean()');
  }
  toggleBooleanDirective() {
    this.booleanToToggleUsingDirective = !this.booleanToToggleUsingDirective;
    this.loggingService.logMessage('invoked toggleBooleanDirective()');
  }
  changeOpacity() {
    this.opacity = Math.random();
    this.loggingService.logMessage('invoked changeOpacity()');
  }
  onNgForCounterChange(event) {
    this.ngForCounterArray = new Array(this.ngForCounter).fill(0);
    this.loggingService.logMessage('invoked onNgForCounterChange(event)');
  }
  showInfoAboutButtonWithreference(){
    console.log(this.buttonWithReference.nativeElement);
    this.loggingService.logMessage(
      'invoked showInfoAboutButtonWithreference()'
    );
  }
  toggleBackgroundColor(){
    this.backgroundColorngClass = !this.backgroundColorngClass;
    this.loggingService.logMessage('invoked toggleBackgroundColor()');
  }
  changeValueForngSwitch(value:number){
    this.valueForNgSwitch = value;
    this.loggingService.logMessage(
      'invoked changeValueForngSwitch(value:number)'
    );
  }
}
