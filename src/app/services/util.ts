import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Util {

    // Convert an internal ID to a localized name
    public idToName(id: string) {

        var idWords = id.split("_");
        var name = "";

        for (var i = 0; i < idWords.length; i++) {
            name += idWords[i].substr(0, 1).toLocaleUpperCase() + idWords[i].substr(1);
            name += i + 1 < idWords.length ? " " : "";
        }

        return name;

    }

    public getFeaturedColor(collection: object): string {

        // If a featured color is defined (which it should be)
        if (collection["featured_color"] != undefined) {

            // If the featured color is predefined, return the color
            if (Object.keys(collection["colors"]).includes(collection["featured_color"])) {

                var color = collection["colors"][collection["featured_color"]];
                return (typeof color == "object") ? color["base"] : color;

            } else return collection["featured_color"]; // Else it should be a hex color

        } else if (collection["start_color"] != undefined) return collection["start_color"]; // Else if a start color is defined, for the generator
        else return "#ffffff"; // Else return white

    }

}
