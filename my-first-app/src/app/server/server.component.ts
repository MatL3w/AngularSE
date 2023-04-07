import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',

})
export class ServerComponent {
  width= 200;
  height = 200
  serverID: number = 10;
  innertextExample = 'text inserted in elements';
  serverStatus: string = 'offline';
  condition = false;
  color = 'FFFFFF';
  constructor() {

    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
      this.color=this.getRandomColor();
      console.log('lol');
    }, 3000);
  }
  onClickButton(){
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
  }
  getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  }
  async fetchData(){
        await fetch('https://localhost:3000/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: 'mati@vp.pl',
            password: 'strongPassword',
          }),
        }).then(res=>console.log(res));
  }
}
