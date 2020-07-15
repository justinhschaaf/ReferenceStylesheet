import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ColorPickerModule } from 'ngx-color-picker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwatchComponent } from './components/swatch/swatch.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { CollectionComponent } from './components/collection/collection.component';

@NgModule({
    declarations: [
        AppComponent,
        SwatchComponent,
        CollectionsComponent,
        CollectionComponent
    ],
    imports: [
        BrowserModule,
        ColorPickerModule,
        AppRoutingModule,
        CommonModule,
        HttpClientModule
    ],
    providers: [
        /*{
            provide: HTTP_INTERCEPTORS,
            useClass: BackendService,
            multi: true
        }*/
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
