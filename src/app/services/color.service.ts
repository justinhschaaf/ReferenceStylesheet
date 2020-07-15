import { Injectable, SystemJsNgModuleLoader } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ColorService {

    public colorLoc: string = "https://content.justinschaaf.com/common/colors/colors.json"; // /assets/colors.json

    constructor() { }

    /*
     * Color Changing (Brighten/Darken)
     */

    brightenColor(color: string, weight: number): string {

        var h = (color.charAt(0)=="#") ? color.substring(1,7) : color;
    
        var r = parseInt(h.substring(0,2),16);
        var g = parseInt(h.substring(2,4),16);
        var b = parseInt(h.substring(4,6),16);
    
        for (var i = 0; i < weight; i++) {
        
            // Test method

            /*r *= 1.15;
            g *= 1.15;
            b *= 1.15;

            var br = r * 1.15;
            var bg = g * 1.15;
            var bb = b * 1.15;

            var avgChange = ((br - r) + (bg - g) + (bb - b)) / 3;

            r += avgChange;
            g += avgChange;
            b += avgChange;*/

            // New method

            r = 255 * this.compostColor(r, 255, 1, .62); // .58
            g = 255 * this.compostColor(g, 255, 1, .62); // .58
            b = 255 * this.compostColor(b, 255, 1, .62); // .58
    
        }
    
        return "#" + this.convertToHex(r) + this.convertToHex(g) + this.convertToHex(b);
    
    }
    
    darkenColor(color: string, weight: number): string {
    
        var h = (color.charAt(0)=="#") ? color.substring(1,7) : color;
    
        var r = parseInt(h.substring(0,2),16);
        var g = parseInt(h.substring(2,4),16);
        var b = parseInt(h.substring(4,6),16);
    
        for (var i = 0; i < weight; i++) {

            // Test method

            /*r *= .75; // .25
            g *= .75;
            b *= .75;

            var dr = r * .75;
            var dg = g * .75;
            var db = b * .75;

            var avgChange = ((dr - r) + (dg - g) + (db - b)) / 3;

            r += avgChange;
            g += avgChange;
            b += avgChange;*/

            // New method

            r = 255 * this.compostColor(r, 255, 1, .38); // .38
            g = 255 * this.compostColor(g, 255, 1, .38); // .38
            b = 255 * this.compostColor(b, 255, 1, .38); // .38
    
        }
    
        return "#" + this.convertToHex(r) + this.convertToHex(g) + this.convertToHex(b);
    
    }

    private compostColor(baseColor: number, topColor: number, baseAlpha: number, topAlpha: number): number {

        /*
         * Sources:
         * https://en.wikipedia.org/wiki/Alpha_compositing
         * https://en.wikipedia.org/wiki/Blend_modes
         * (both as of 2019-10-14)
         * 
         * Also thanks to https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/PDF32000_2008.pdf for 
         * expanding my understanding of blend modes and alpha composting
         * 
         */

        // Use premultiplied alpha
        var bC = (baseColor / 255) * baseAlpha;
        var tC = (topColor / 255) * topAlpha;

        // Overlay blend mode from Wikipedia, linked above
        if (bC < 0.5) {

            // 2 * Multiply blend mode
            return 2 * bC * tC;

        } else { // bC > 0.5

            // Screen blend mode
            return 1 - (2 * (1 - bC) * (1 - tC));

        }

    }

    /*
     * Contrast Color
     */

    getContrastColor(color: string): string {

        var h = (color.charAt(0) == "#") ? color.substring(1, 7) : color;

        var r = parseInt(h.substring(0, 2), 16);
        var g = parseInt(h.substring(2, 4), 16);
        var b = parseInt(h.substring(4, 6), 16);

        var avg = (r + g + b) / 3;

        if (avg <= 191) return "#ffffff";
        else return "#000000";

    }

    /*
     * Convert Colors
     */

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

        var h = (hex.charAt(0)=="#") ? hex.substring(1,7) : hex;

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
            console.log('Invalid length of the input hex value!');   
            return; 
        }
        if (/[0-9a-f]{6}/i.test(hex) != true) {
            console.log('Invalid digits in the input hex value!');
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
