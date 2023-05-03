import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'lol';
  elo = "elo";

  onUpdateInputValue(event:any){
    this.name = (<HTMLInputElement>event.target).value;
    console.log();
  }
}