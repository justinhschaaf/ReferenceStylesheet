import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  constructor() { }

  // Credit to http://www.javascripter.net/faq/rgbtohex.htm
  convertToHex(n) {
    n = parseInt(n,10);
    if (isNaN(n)) return "00";
    n = Math.max(0,Math.min(n,255));
    return "0123456789ABCDEF".charAt((n-n%16)/16)
         + "0123456789ABCDEF".charAt(n%16);
   }

  // Credit to http://www.javascripter.net/faq/hextorgb.htm
  convertToRGB(hex) {

    var h = (hex.charAt(0)=="#") ? hex.substring(1,7):hex;

    var r = parseInt(h.substring(0,2),16);
    var g = parseInt(h.substring(2,4),16);
    var b = parseInt(h.substring(4,6),16);

    var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
    return rgb;

  }

  // Credit to http://www.javascripter.net/faq/hex2cmyk.htm
  convertToCMYK(hex) {
    
    var computedC = 0;
    var computedM = 0;
    var computedY = 0;
    var computedK = 0;
   
    hex = (hex.charAt(0)=="#") ? hex.substring(1,7) : hex;
   
    if (hex.length != 6) {
     alert ('Invalid length of the input hex value!');   
     return; 
    }
    if (/[0-9a-f]{6}/i.test(hex) != true) {
     alert ('Invalid digits in the input hex value!');
     return; 
    }
   
    var r = parseInt(hex.substring(0,2),16); 
    var g = parseInt(hex.substring(2,4),16); 
    var b = parseInt(hex.substring(4,6),16); 
   
    // BLACK
    if (r==0 && g==0 && b==0) {
     computedK = 1;
     return [0,0,0,1];
    }
   
    computedC = 1 - (r/255);
    computedM = 1 - (g/255);
    computedY = 1 - (b/255);
   
    var minCMY = Math.min(computedC, Math.min(computedM, computedY));
   
    computedC = (computedC - minCMY) / (1 - minCMY) ;
    computedM = (computedM - minCMY) / (1 - minCMY) ;
    computedY = (computedY - minCMY) / (1 - minCMY) ;
    computedK = minCMY;
   
    var cmyk = "cmyk(" + Math.round(computedC * 100) + ", " + Math.round(computedM * 100) + ", " + Math.round(computedY * 100) + ", " + Math.round(computedK * 100) + ")";
    return cmyk;

  }
  
}
