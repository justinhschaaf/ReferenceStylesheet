import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'jss-root',
    templateUrl: './app.html',
    styleUrls: ['./app.scss']
})
export class AppComponent {

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit() {

        var colors = this;

        // Demonstrates getting query params -- keep for future reference
        /*this.route.queryParamMap.subscribe(params => {
            var colorgen = params['params']['colorgen'];
            if (colorgen != undefined) colors.generator_default = '#' + colorgen;
        });*/

    }

}
