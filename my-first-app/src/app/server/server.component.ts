import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      h3 {
        color: blue;
      }
      .smooth-transition {
        transition: all 0.2s ease-in-out;
      }
    `,
  ],
})
export class ServerComponent {
  width= 200;
  height = 200
  serverID: number = 10;
  innertextExample = 'text inserted in elements';
  serverStatus: string = 'offline';
  condition = false;

  constructor() {
    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 3000);
  }
  onClickButton(){
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
  }
}
