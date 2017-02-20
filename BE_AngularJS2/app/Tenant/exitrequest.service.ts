import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { ITenant } from './tenant'

@Injectable()
export class ExitRequestService {
    private _updateExitRequestURl = "http://localhost:6271/api/ExitDate/UpdateExitDate/";

    constructor(private _http: Http) {

    }
    UpdateExitRequest(_tenant: ITenant) {
        let bodyString = JSON.stringify(_tenant); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post(this._updateExitRequestURl, _tenant, options)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}