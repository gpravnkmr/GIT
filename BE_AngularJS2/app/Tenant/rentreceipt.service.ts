import {Injectable} from '@angular/core'
import { Http, Response,URLSearchParams  } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import {IReceipt} from '../SharedEntities/receipt'

@Injectable()
export class RentReceiptService{
    private _getRentReceiptUrl = 'http://localhost:6271/api/tenant/GetReceiptDetails/';
    constructor(private _http: Http) { }

    getReceiptDetails(tenantID: string){
         // Parameters obj-
        /*let params: URLSearchParams = new URLSearchParams();
        params.set('userName', userName);
        params.set('password', password);*/        
        return this._http.get(this._getRentReceiptUrl + tenantID)
            .map((response: Response) => <IReceipt> response.json())
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