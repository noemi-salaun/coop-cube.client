import { NgModule }      from '@angular/core';
import { HttpModule }      from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import "./rxjs.import";

@NgModule({
    imports:      [ BrowserModule, HttpModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
