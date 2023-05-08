import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  variableToBindNr1: string = '';
  booleanToToggle = false;
  booleanToToggleUsingDirective = false;
  opacity = 0.5;
  numberOfExchangesTable: number = 0;
  maxNumberOfExchangesTable: string = '';
  informationAboutExchanges: string = '';
  ngForCounter:number = 0;
  ngForCounterArray: Array<any>=[];

  constructor() {}
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
  }
  toggleBooleanDirective() {
    this.booleanToToggleUsingDirective = !this.booleanToToggleUsingDirective;
  }
  changeOpacity() {
    this.opacity = Math.random();
  }
  onNgForCounterChange(event) {
    this.ngForCounterArray = new Array(this.ngForCounter).fill(0);
  }
}
