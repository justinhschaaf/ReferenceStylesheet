import { Component, OnInit, Input } from '@angular/core';
import { colortypes } from '../colorutil';

@Component({
  selector: 'swatch-row',
  templateUrl: './swatch-row.component.html',
  styleUrls: ['./swatch-row.component.scss']
})
export class SwatchRowComponent implements OnInit {

  colortypes = colortypes;

  @Input() color: {};

  constructor() {}

  ngOnInit() {
  }

}
