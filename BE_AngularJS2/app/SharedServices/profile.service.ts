import { Injectable } from '@angular/core'
import { Http, Response, URLSearchParams, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { IEmployee } from '../SharedEntities/employee'
import { ITenant } from '../Tenant/tenant'

@Injectable()
export class ProfileService {
    private _updateProfileUrl = "http://localhost:6271/api/tenant/UpdateTenant/";
    private _getEmployeeUrl = "http://localhost:6271/api/tenant/GetEmployee/";
    private _getTenantUrl = "http://localhost:6271/api/tenant/GetTenant/";
    constructor(private _http: Http) { }
    private headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });

    saveTenant(_tenant: ITenant) {
        let bodyString = JSON.stringify(_tenant); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.put(this._updateProfileUrl, _tenant, options) // ...using post request
            .catch(this.handleError);
    }

    saveEmployee(_employee: IEmployee) {
    }

    getEmployee(employeeID: string) {
        return this._http.get(this._getEmployeeUrl + employeeID)
            .map((response: Response) => <IEmployee>response.json())
            .do(data => JSON.stringify(data))
            .catch(this.handleError);
    }

    getTenant(tenantID: string) {
        return this._http.get(this._getTenantUrl + tenantID)
            .map((response: Response) => <ITenant>response.json())
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