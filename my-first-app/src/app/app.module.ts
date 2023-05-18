import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { LinkComponent } from './link/link.component';
import { SubElement1Component } from './sub-element1/sub-element1.component';
import { SubElement2Component } from './sub-element2/sub-element2.component';
import {Basic} from './server/basic.directive'
import { Structural } from './server/structural.directive';
import { LoggingService } from './logging.service';
import { ServiceToInject } from './serviceToInject.service';
import { View1 } from './view1/view1.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'view1', component: View1 },
];
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    LinkComponent,
    SubElement1Component,
    SubElement2Component,
    Basic,
    Structural,
    View1,
  ],
  imports: [BrowserModule, FormsModule,RouterModule.forRoot(appRoutes)],
  providers: [LoggingService, ServiceToInject],
  bootstrap: [AppComponent],
})
export class AppModule {}
