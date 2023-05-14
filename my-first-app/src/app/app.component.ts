import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('subElement1') subElement1;
  paragraphs = ['string1', 'string2', 'string3'];
  textFromSubElement2: string = '';
  textForInputWithReference: string = '';
  inputValueForElement2:string ='';
  constructor() {}

  eventEmittedFormSubElement2(text: string) {
    this.textFromSubElement2 = text;
  }
  useReferenceToShowText(ele: HTMLInputElement) {
    this.textForInputWithReference = ele.value;
    ele.value = '';
  }
  showInfoAboutSubEle1(){
    console.log(this.subElement1);
  }
  ngAfterViewInit(){
    console.log(this.subElement1);
  }
  changeInputValueForElement2(){
    this.inputValueForElement2 = Math.random().toString();
  }
}
