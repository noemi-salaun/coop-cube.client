import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'my-app',
    template: '<h1>{{text | async}}</h1>'
})
export class AppComponent {

    text:Observable<string>;

    constructor(private http:Http) {
        this.text = http.get('http://localhost:3010').map(response => response.text());
    }
}
