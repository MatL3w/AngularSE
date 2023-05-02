import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  width = 200;
  height = 200;
  serverID: number = 10;
  numberOfExchangesTable: number = 0;
  maxNumberOfExchangesTable: string = '';

  informationAboutExchanges = '';
  innertextExample = 'text inserted in elements';
  serverStatus: string = 'offline';
  condition = false;
  color = 'FFFFFF';
  token = 'q';

  constructor() {
    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
      this.color = this.getRandomColor();
      console.log('lol');
    }, 3000);
  }
  onClickButton() {
    if (this.condition) {
      this.condition = false;
    } else {
      this.condition = true;
    }
  }
  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  async fetchData() {
    await fetch('http://localhost:3000/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'mati@vp.pl',
        password: 'strongPassword',
      }),
    })
      .then((res) => res.json())
      .then((res) => (this.token = res.token));
  }
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
        this.maxNumberOfExchangesTable = (res.length-1).toString();
        this.informationAboutExchanges = JSON.stringify(res[this.numberOfExchangesTable]);
      });
  }
}
