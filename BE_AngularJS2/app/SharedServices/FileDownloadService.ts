import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class FileDownloadService {
    private _downloadUrl = 'http://localhost:6271/api/tenant/GetReceiptDetails/';
    constructor(private _http: Http) { }

    getReceiptDetails(paymentID: string) {
        // Parameters obj-
        /*let params: URLSearchParams = new URLSearchParams();
        params.set('userName', userName);
        params.set('password', password);*/
        return this._http.get(this._downloadUrl + paymentID)
            .map((response: Response) => response)
            .do(data => {
                let headers = data.headers;
                let contentType = headers.get("Content-Type");
                let name = headers.get("name");

                // Initialize Blob
                let blob = new Blob([data.text()], { type: contentType });

                // Make the download process
                let a = window.document.createElement("a");
                a.href = window.URL.createObjectURL(blob);
                a.download = name;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}