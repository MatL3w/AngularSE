import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { LinkComponent } from './link/link.component';
import { SubElement1Component } from './sub-element1/sub-element1.component';
import { SubElement2Component } from './sub-element2/sub-element2.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, LinkComponent, SubElement1Component, SubElement2Component],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
