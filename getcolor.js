var colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "lblue",
    "blue",
    "purple",
    "magenta",
    "pink",
    "dgrey",
    "lgrey",
    "jhs",
    "pta",
    "jus"
];

var hexDigits = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");

for (var i = 0; i < colors.length; i++) {

    var subcolors = [
        colors[i] + "0",
        colors[i] + "1",
        colors[i] + "2",
        colors[i] + "3",
        colors[i] + "4"
    ];

    for (var j = 0; j < subcolors.length; j++) {

        var colorHex = document.getElementById(subcolors[j] + "-hex");
        var colorRGB = document.getElementById(subcolors[j] + "-rgb");
        var colorCMYK = document.getElementById(subcolors[j] + "-cmyk");
        var color = window.getComputedStyle(document.getElementById(subcolors[j])).getPropertyValue('background-color');

        // Hex

        colorHex.innerHTML = rgb2hex(color);

        // RGB

        colorRGB.innerHTML = color;

        // CMYK

        var rgbRaw = color.substr(4, color.length - 5);
        var rgbArray = rgbRaw.split(", ");
        var cmyk = rgb2cmyk(rgbArray[0], rgbArray[1], rgbArray[2]);

        colorCMYK.innerHTML = "cmyk(" + cmyk.cyan + ", " + cmyk.magenta + ", " + cmyk.yellow + ", " + cmyk.black + ")";

    }

}

/*
 *
 * FULL CREDIT FOR RGB -> HEX GOES TO 
 * https://stackoverflow.com/questions/1740700/how-to-get-hex-color-value-rather-than-rgb-value
 * 
 */

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

/*
 *
 * FULL CREDIT FOR RGB -> CMYK GOES TO 
 * http://www.javascripter.net/faq/rgb2cmyk.htm
 * 
 */

function rgb2cmyk(r,g,b) {
    var computedC = 0;
    var computedM = 0;
    var computedY = 0;
    var computedK = 0;
   
    //remove spaces from input RGB values, convert to int
    var r = parseInt( (''+r).replace(/\s/g,''),10 ); 
    var g = parseInt( (''+g).replace(/\s/g,''),10 ); 
    var b = parseInt( (''+b).replace(/\s/g,''),10 ); 
   
    if ( r==null || g==null || b==null ||
        isNaN(r) || isNaN(g)|| isNaN(b) )
    {
        alert ('Please enter numeric RGB values!');
        return;
    }
    if (r<0 || g<0 || b<0 || r>255 || g>255 || b>255) {
        alert ('RGB values must be in the range 0 to 255.');
        return;
    }
   
    // BLACK
    if (r==0 && g==0 && b==0) {
       computedK = 1;
       return [0,0,0,1];
    }
   
    computedC = 1 - (r/255);
    computedM = 1 - (g/255);
    computedY = 1 - (b/255);
   
    var minCMY = Math.min(computedC,
                 Math.min(computedM,computedY));
    computedC = (computedC - minCMY) / (1 - minCMY) ;
    computedM = (computedM - minCMY) / (1 - minCMY) ;
    computedY = (computedY - minCMY) / (1 - minCMY) ;
    computedK = minCMY;
   
    return {
        cyan: Math.round(computedC * 100),
        magenta: Math.round(computedM * 100),
        yellow: Math.round(computedY * 100),
        black: Math.round(computedK * 100)
    };

}
