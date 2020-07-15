import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { ColorService } from '../../services/color.service';
import { Util } from '../../services/util';

@Component({
    selector: 'jss-swatch',
    templateUrl: './swatch.component.html',
    styleUrls: ['./swatch.component.scss']
})
export class SwatchComponent implements OnInit, OnChanges {

    @Input() id;
    @Input() color;

    objectColor: boolean = false; // If the color is in object notation

    light: string;
    base: string;
    dark: string;

    constructor(
        public cs: ColorService,
        public util: Util
    ) {}

    ngOnInit() {}

    ngOnChanges() {

        if (typeof this.color == "object") this.objectColor = true;

        // Generate colors beforehand
        this.base = this.objectColor ? this.color["base"] : this.color;
        this.light = this.objectColor ? (this.color["light"] != undefined ? this.color["light"] : this.cs.brightenColor(this.base, 1)) : this.cs.brightenColor(this.base, 1);
        this.dark = this.objectColor ? (this.color["dark"] != undefined ? this.color["dark"] : this.cs.darkenColor(this.base, 1)) : this.cs.darkenColor(this.base, 1);

    }

}
