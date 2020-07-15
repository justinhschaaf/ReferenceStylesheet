import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColorService } from './color.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService implements HttpInterceptor {

    private stylePrefix: string = "    --jss-";

    constructor(
        private cs: ColorService,
        private ds: DataService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        /*
        
            This was an attempt to automatically generate css variables defining generated colors from this website as requested by the web request.
            However, at the current moment, Angular does not offer a way to intercept incoming HTTP requests, making this task impossible through
            Angular (as far as I am aware). Maybe for another day.

        */

        /*if (request.method === "GET" && (request.url.includes("colors.justinschaaf.com") || request.url.includes("localhost:4200")) && request.url.includes("/styles")) {

            // Get colors
            return Observable.create(this.ds.getData(this.cs.colorLoc).then((colorData: object) => {

                // Params: ?pinetree=1&DDEEFF=1
                var requestedStyles: string[] = [];
                var stylesheet = ":root {\n";

                // Get styles to request
                if (request.params != null && request.params != undefined && request.params.keys) {
                    // Add keys to requested styles list
                    for (var key in request.params.keys) if (request.params.get(key) === "1" || request.params.get(key) === "true") requestedStyles.push(key);
                } else {
                    // Add default keys to the requested styles list
                    for (var key in Object.keys(colorData)) requestedStyles.push(key);
                }

                for (var key in requestedStyles) {

                    if (Object.keys(colorData).includes(key)) {

                        var namespace = colorData[key]["namespace"].toLowerCase();

                        if (colorData[key]["colors"] != undefined) for (var colorKey in colorData[key]["colors"]) {

                            var color = colorData[key]["colors"][colorKey];
                            var objectColor = false;

                            if (typeof color == "object") objectColor = true;

                            // Generate colors
                            var base = objectColor ? color["base"] : color;
                            var light = objectColor ? (color["light"] != undefined ? color["light"] : this.cs.brightenColor(base, 1)) : this.cs.brightenColor(base, 1);
                            var dark = objectColor ? (color["dark"] != undefined ? color["dark"] : this.cs.darkenColor(base, 1)) : this.cs.darkenColor(base, 1);

                            // Add colors
                            stylesheet += this.stylePrefix + namespace + "-" + colorKey + ": "   + base.toUpperCase()  + ";\n";
                            stylesheet += this.stylePrefix + namespace + "-" + colorKey + "-l: " + light.toUpperCase() + ";\n";
                            stylesheet += this.stylePrefix + namespace + "-" + colorKey + "-d: " + dark.toUpperCase()  + ";\n";

                        }

                    } else if (key.length <= 6 && key.length > 0) {

                        var hexColor = key;

                        // Adjust to correct length
                        while (hexColor.length < 6) hexColor += key;
                        if (hexColor.length > 6) hexColor.substr(0, 6);

                        // Add colors
                        stylesheet += this.stylePrefix + "generator-" + key + ": #"  + hexColor + ";\n";
                        stylesheet += this.stylePrefix + "generator-" + key + "-l: " + this.cs.brightenColor(hexColor, 1).toUpperCase() + ";\n";
                        stylesheet += this.stylePrefix + "generator-" + key + "-d: " + this.cs.darkenColor(hexColor, 1).toUpperCase() + ";\n";

                    }

                }

                stylesheet += "}";

                return new HttpResponse({ status: 200, body: stylesheet });

            }));

        }*/

        return next.handle(request);

    }

}
