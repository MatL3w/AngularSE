import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paragraphs = ['string1','string2','string3']
  textFromSubElement2:string="";

  eventEmittedFormSubElement2(text:string){
    this.textFromSubElement2=text;
  }
}
