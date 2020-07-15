import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ColorService } from 'src/app/services/color.service';
import { Util } from 'src/app/services/util';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

    colors: object;
    colorIds: string[];

    constructor(
        private ds: DataService,
        public cs: ColorService,
        public util: Util
    ) { }

    ngOnInit() {

        var cc = this;

        this.ds.getData(this.cs.colorLoc).then((data: object) => {

            cc.colors = data;
            cc.colorIds = Object.keys(data);

        });

    }

}
