import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwatchComponent } from './swatch/swatch.component';
import { SwatchRowComponent } from './swatch-row/swatch-row.component';
import { FontSpecimenComponent } from './font-specimen/font-specimen.component';

@NgModule({
  declarations: [
    AppComponent,
    SwatchComponent,
    SwatchRowComponent,
    FontSpecimenComponent
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
