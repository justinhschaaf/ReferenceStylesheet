import { Component, OnInit, Input } from '@angular/core';

import { ConvertService } from '../convert.service';

@Component({
  selector: 'swatch',
  templateUrl: './swatch.component.html',
  styleUrls: ['./swatch.component.scss']
})
export class SwatchComponent implements OnInit {

  @Input() type: string;
  @Input() color: string;
  @Input() contrast: string;

  constructor(
    private cs: ConvertService
  ) { }

  ngOnInit() {
  }

}
