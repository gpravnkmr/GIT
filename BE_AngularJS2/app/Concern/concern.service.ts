import { Injectable } from '@angular/core'
import { Http, Response, URLSearchParams, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Concern } from './concern'

@Injectable()
export class ConcernService {
    private _saveConcernUrl = 'http://localhost:6271/api/tenant/PostComplaint/';
    private _getConcenrsUrl = "http://localhost:6271/api/tenant/GetComplaints/";
    constructor(private _http: Http) { }
    private headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });

    saveComplaint(_complaint: Concern) {
        /*return this._http.post(this._saveConcerntUrl, JSON.stringify(_complaint), {headers: this.headers})
            .catch(this.handleError);*/
        let bodyString = JSON.stringify(_complaint); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post(this._saveConcernUrl, _complaint, options) // ...using post request
            .catch(this.handleError);
    }

    getComplaints(tenantID: string) {
        return this._http.get(this._getConcenrsUrl + tenantID)
            .map((response: Response) => <Concern>response.json())
            .do(data => JSON.stringify(data))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}