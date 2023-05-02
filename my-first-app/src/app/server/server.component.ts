import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {

  numberOfExchangesTable: number = 0;
  maxNumberOfExchangesTable: string = '';
  informationAboutExchanges: string = '';
  
  constructor() {}
  async onVariableChange(newValue: any) {
    const headers = new Headers();
    // headers.append('Access-Control-Allow-Origin', 'http://localhost:4200/');
    // headers.append('Content-Type', 'application/json');
    await fetch('https://data.binance.com/api/v3/ticker/24hr', {
      method: 'GET',
      headers: headers,
    })
      .then((res) => res.json())
      .then((res) => {
        this.maxNumberOfExchangesTable = (res.length - 1).toString();
        this.informationAboutExchanges = JSON.stringify(
          res[this.numberOfExchangesTable]
        );
      });
  }
}
