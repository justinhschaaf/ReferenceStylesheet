import { Component } from '@angular/core';
import { ptcolors, jscolors, othercolors, greycolors, brightcolors, darkcolors } from './colorutil';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {

  ptcolors = ptcolors;
  jscolors = jscolors;
  othercolors = othercolors;
  greycolors = greycolors;
  brightcolors = brightcolors;
  darkcolors = darkcolors;
  aEnabled = false;

  /*toggleAColors() {

    if (this.aEnabled) {
      this.colortypes = [
        "C50",
        "C100",
        "C200",
        "C300",
        "C400",
        "C500",
        "C600",
        "C700",
        "C800",
        "C900",
      ];
      this.aEnabled = false;
      //document.getElementById('aColorButton').innerHTML = "Show \"A\" Colors";
    } else {
      this.colortypes = [
        "C50",
        "C100",
        "C200",
        "C300",
        "C400",
        "C500",
        "C600",
        "C700",
        "C800",
        "C900",
        "A100",
        "A200",
        "A400",
        "A700",
      ];
      this.aEnabled = true;
      //document.getElementById('aColorButton').innerHTML = "Hide \"A\" Colors";
    }

  }*/

  constructor() {}

}
