import { Injectable } from '@angular/core'
import { Http, Response, URLSearchParams, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IUser } from "./User"
@Injectable()
export class LoginService {
    private _loginUrl = 'http://localhost:6271/api/login/GetUser';
    constructor(private _http: Http) { }

    getUser(userName: string, password: string) {
        let bodyString = JSON.stringify({ UserName: userName, Password: password }); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post(this._loginUrl, bodyString, options)
            .map((response: Response) => <IUser>response.json())
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