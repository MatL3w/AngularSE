import { Component, ComponentFactoryResolver, ComponentRef, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { LoggingService } from '../logging.service';
import { ServiceToInject } from '../serviceToInject.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {AlertModalComponent} from '../alert-modal/alert-modal.component'
import { PlaceHolderDirective } from '../shared/place-holder.directive';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  // providers:[LoggingService,ServiceToInject],
})
export class ServerComponent implements OnInit {
  @ViewChild('buttonWithReference') buttonWithReference: ElementRef;
  @ViewChild(PlaceHolderDirective) alertModal: PlaceHolderDirective;
  variableToBindNr1: string = '';
  booleanToToggle = false;
  booleanToToggleUsingDirective = false;
  opacity = 0.5;
  numberOfExchangesTable: number = 0;
  maxNumberOfExchangesTable: string = '';
  informationAboutExchanges: string = '';
  ngForCounter: number = 0;
  ngForCounterArray: Array<any> = [];
  backgroundColorngClass = true;
  valueForNgSwitch = 0;
  subjectRandomValue = 0;
  stringToPipe = 'pipe';
  stringforFetchedData = '';
  componentRef: ComponentRef<AlertModalComponent>;
  alertContainerRef: ViewContainerRef;

  constructor(
    private loggingService: LoggingService,
    private router: Router,
    private http: HttpClient,
  ) // private componentFactoryresolver: ComponentFactoryResolver
  {}

  ngOnInit(): void {
    this.loggingService.subjectEmitter.subscribe((number) => {
      this.subjectRandomValue = number;
    });

  }
  ngAfterViewInit(){
    this.alertContainerRef = this.alertModal.viewContainerRef;
    this.alertContainerRef.clear();
    this.componentRef = this.alertContainerRef.createComponent(AlertModalComponent);
    this.componentRef.instance.onButtonOkClick.subscribe(()=>{
      this.componentRef.instance.onButtonOkClick.unsubscribe();
      this.componentRef.destroy();
    });
  }

  async onVariableChange(newValue: any) {
    const headers = new Headers();
    await fetch('https://data.binance.com/api/v3/ticker/24hr', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        this.maxNumberOfExchangesTable = (res.length - 1).toString();
        this.informationAboutExchanges = JSON.stringify(
          res[this.numberOfExchangesTable]
        );
      });
  }
  toggleBoolean() {
    this.booleanToToggle = !this.booleanToToggle;
    this.loggingService.logMessage('invoked toggleBoolean()');
    console.log(this.loggingService.num);
  }
  toggleBooleanDirective() {
    this.booleanToToggleUsingDirective = !this.booleanToToggleUsingDirective;
    this.loggingService.logMessage('invoked toggleBooleanDirective()');
  }
  changeOpacity() {
    this.opacity = Math.random();
    this.loggingService.logMessage('invoked changeOpacity()');
  }
  onNgForCounterChange(event) {
    this.ngForCounterArray = new Array(this.ngForCounter).fill(0);
    this.loggingService.logMessage('invoked onNgForCounterChange(event)');
  }
  showInfoAboutButtonWithreference() {
    console.log(this.buttonWithReference.nativeElement);
    this.loggingService.logMessage(
      'invoked showInfoAboutButtonWithreference()'
    );
  }
  toggleBackgroundColor() {
    this.backgroundColorngClass = !this.backgroundColorngClass;
    this.loggingService.logMessage('invoked toggleBackgroundColor()');
  }
  changeValueForngSwitch(value: number) {
    this.valueForNgSwitch = value;
    this.loggingService.logMessage(
      'invoked changeValueForngSwitch(value:number)'
    );
  }
  changeURLafterClick(str: string) {
    setTimeout(() => {
      this.router.navigate([str]);
    }, 1000);
  }
  subjectEmit() {
    this.loggingService.subjectEmitter.emit(Math.random());
    this.loggingService.logMessage('subjectEmit');
  }
  fetchData() {
    this.http
      .get('https://restcountries.com/v3.1/name/poland')
      .subscribe((res) => {
        this.stringforFetchedData = res[0].altSpellings[1];
        console.log(res);
        console.log(this.stringforFetchedData);
      });
  }
  OpenModalButton_OpenModal() {
    this.alertContainerRef = this.alertModal.viewContainerRef;
    this.alertContainerRef.clear();
    this.componentRef = this.alertContainerRef.createComponent(AlertModalComponent);
    this.componentRef.instance.onButtonOkClick.subscribe(()=>{
      this.componentRef.instance.onButtonOkClick.unsubscribe();
      this.componentRef.destroy();
    });
  }
}
