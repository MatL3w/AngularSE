import { Component } from '@angular/core';

@Component({
  selector:"app-server",
  templateUrl:'./server.component.html',
  styles:[`
      h3{
        color:blue;
      }
  `]
})


export class ServerComponent{
    serverID: number  = 10;
    serverStatus: string = "offline";
    condition = true;
}
