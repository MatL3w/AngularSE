import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css'],
})
export class AlertModalComponent {
  @Output() onButtonOkClick: EventEmitter<any> = new EventEmitter();

  okButtonClick(){
    this.onButtonOkClick.emit();
  }
}
