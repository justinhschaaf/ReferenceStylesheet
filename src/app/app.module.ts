import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ColorPickerModule } from 'ngx-color-picker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwatchComponent } from './swatch/swatch.component';
import { SwatchRowComponent } from './swatch-row/swatch-row.component';
import { FontSpecimenComponent } from './font-specimen/font-specimen.component';
import { GeneratorComponent } from './generator/generator.component';

@NgModule({
  declarations: [
    AppComponent,
    SwatchComponent,
    SwatchRowComponent,
    FontSpecimenComponent,
    GeneratorComponent
  ],
  imports: [
    BrowserModule,
    ColorPickerModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
