import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Util } from 'src/app/services/util';
import { ActivatedRoute } from '@angular/router';
import { ColorService } from '../../services/color.service';

@Component({
    selector: 'jss-collection',
    templateUrl: './collection.component.html',
    styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

    // Basic info
    private id: string;
    name: string;
    collection: object;

    // Store colors & keys
    colors: object;
    colorKeys: string[];

    // Store color for generator
    genColor: string;

    constructor(
        private route: ActivatedRoute,
        private cs: ColorService,
        private ds: DataService,
        private util: Util
    ) {}

    ngOnInit() {

        var cc = this;

        this.id = this.route.snapshot.paramMap.get("collection");
        this.genColor = this.route.snapshot.paramMap.get("color");

        if ((this.genColor != null && this.genColor != undefined) && (this.genColor.length == 6 || this.genColor.length == 3)) this.genColor = "#" + this.genColor;

        this.ds.getData(this.cs.colorLoc).then((data: object) => {

            cc.collection = data[cc.id];
            cc.colors = (cc.collection["colors"] != undefined) ? cc.collection["colors"] : {};
            cc.colorKeys = Object.keys(cc.colors);

            cc.name = (cc.collection["name"] != undefined) ? cc.collection["name"] : cc.util.idToName(cc.id);
            if (cc.genColor == undefined && cc.collection['generator'] == true) cc.genColor = (cc.collection['start_color'] != undefined) ? cc.collection['start_color'] : "#66cc88";

            console.log(cc.genColor);

        });
    
    }

    onColorPickerChange(color: string) {
        this.genColor = color;
    }

}
