import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-element1',
  templateUrl: './sub-element1.component.html',
  styleUrls: ['./sub-element1.component.css']
})
export class SubElement1Component {
  @Input('inputStringArray') paragraph: string;
  constructor(){};
  ngOnChanges(){
    console.log("sub-element1 input property changed");
  }
}
