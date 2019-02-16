import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwatchComponent } from './swatch/swatch.component';
import { SwatchRowComponent } from './swatch-row/swatch-row.component';

@NgModule({
  declarations: [
    AppComponent,
    SwatchComponent,
    SwatchRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
