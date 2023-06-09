import { Component,EventEmitter,Input,Output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sub-element2',
  templateUrl: './sub-element2.component.html',
  styleUrls: ['./sub-element2.component.css'],
})
export class SubElement2Component {
  text: string = '';
  @Output() event1 = new EventEmitter<string>();
  @Input('inputValue') paragraph: string;

  onTextChange(lol: any) {
    this.event1.emit(this.text);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
