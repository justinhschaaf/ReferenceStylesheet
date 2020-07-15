import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    constructor(
        private http: HttpClient
    ) { }  
    
    /**
     * Get data from the specified URL, as an object
     * 
     * @param url The url to access the data
     * @returns The requested data, as an object
     */
    public getData(url: string): Promise<object> {

        return new Promise((resolve, reject) => {

            this.http.get(url, { responseType: 'text' })
                .subscribe(data => {
                    // Fulfill the promise
                    resolve(JSON.parse(data));
                });
            
        });

    }
}
