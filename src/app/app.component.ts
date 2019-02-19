import { Component } from '@angular/core';
import { 
  ptcolors, 
  jscolors, 
  othercolors, 
  greycolors, 
  brightcolors, 
  darkcolors, 
  generator_default 
} from './colorutil';

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
  generator_default = generator_default;

  constructor() {}

}
