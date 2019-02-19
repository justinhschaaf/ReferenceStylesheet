import { Component, OnInit } from '@angular/core';
import { ColorPickerService } from 'ngx-color-picker';

import { dark_primary_text, light_primary_text, contrast_default, generator_default } from '../colorutil';
import { ConvertService } from '../convert.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {

  private dark_primary_text = dark_primary_text;
  private light_primary_text = light_primary_text;
  private contrast_default = contrast_default;

  private color: string = generator_default;
  private colorObject = { 
    metadata: {
      title: 'Custom Color'
    },
    C50:  this.brightenColor(this.color, 5),
    C100: this.brightenColor(this.color, 4),
    C200: this.brightenColor(this.color, 3),
    C300: this.brightenColor(this.color, 2),
    C400: this.brightenColor(this.color, 1),
    C500: this.color,
    C600: this.darkenColor(this.color, 1),
    C700: this.darkenColor(this.color, 2),
    C800: this.darkenColor(this.color, 3),
    C900: this.darkenColor(this.color, 4),
    contrast: this.contrast_default
  };

  constructor(private cp: ColorPickerService, private cs: ConvertService) {
    
  }

  ngOnInit() {
  }

  onColorPickerChange(color: string) {

    var c50 = this.brightenColor(color, 5);
    var c100 = this.brightenColor(color, 4);
    var c200 = this.brightenColor(color, 3);
    var c300 = this.brightenColor(color, 2);
    var c400 = this.brightenColor(color, 1);
    var c500 = color;
    var c600 = this.darkenColor(color, 1);
    var c700 = this.darkenColor(color, 2);
    var c800 = this.darkenColor(color, 3);
    var c900 = this.darkenColor(color, 4);

    this.color = c500;
    this.colorObject = { 
      metadata: {
        title: 'Custom Color'
      },
      C50:  c50,
      C100: c100,
      C200: c200,
      C300: c300,
      C400: c400,
      C500: c500,
      C600: c600,
      C700: c700,
      C800: c800,
      C900: c900,
      contrast: this.generateContrast({
        C50:  c50,
        C100: c100,
        C200: c200,
        C300: c300,
        C400: c400,
        C500: c500,
        C600: c600,
        C700: c700,
        C800: c800,
        C900: c900,
      })
    };
  }

  generateContrast(color: {}): {} {

    return {
      C50:  this.getContrastColor(color["C50"]),
      C100: this.getContrastColor(color["C100"]),
      C200: this.getContrastColor(color["C200"]),
      C300: this.getContrastColor(color["C300"]),
      C400: this.getContrastColor(color["C400"]),
      C500: this.getContrastColor(color["C500"]),
      C600: this.getContrastColor(color["C600"]),
      C700: this.getContrastColor(color["C700"]),
      C800: this.getContrastColor(color["C800"]),
      C900: this.getContrastColor(color["C900"]),
    };

  }

  getContrastColor(color: string): string {

    var h = (color.charAt(0)=="#") ? color.substring(1,7) : color;

    var r = parseInt(h.substring(0,2),16);
    var g = parseInt(h.substring(2,4),16);
    var b = parseInt(h.substring(4,6),16);

    var avg = (r + g + b) / 3;

    if (avg <= 127) return this.light_primary_text;
    else return this.dark_primary_text;

  }

  brightenColor(color: string, weight: number) {

    var h = (color.charAt(0)=="#") ? color.substring(1,7) : color;

    var r = parseInt(h.substring(0,2),16);
    var g = parseInt(h.substring(2,4),16);
    var b = parseInt(h.substring(4,6),16);

    for (var i = 0; i < weight; i++) {
      r += r * .15
      g += g * .15
      b += b * .15
    }

    return "#" + this.cs.convertToHex(r) + this.cs.convertToHex(g) + this.cs.convertToHex(b);

  }

  darkenColor(color: string, weight: number) {

    var h = (color.charAt(0)=="#") ? color.substring(1,7) : color;

    var r = parseInt(h.substring(0,2),16);
    var g = parseInt(h.substring(2,4),16);
    var b = parseInt(h.substring(4,6),16);

    for (var i = 0; i < weight; i++) {
      r -= r * .20
      g -= g * .20
      b -= b * .20
    }

    return "#" + this.cs.convertToHex(r) + this.cs.convertToHex(g) + this.cs.convertToHex(b);

  }

}
