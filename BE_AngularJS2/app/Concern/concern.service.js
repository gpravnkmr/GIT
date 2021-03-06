"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
var ConcernService = (function () {
    function ConcernService(_http) {
        this._http = _http;
        this._saveConcernUrl = 'http://localhost:6271/api/tenant/PostComplaint/';
        this._getConcenrsUrl = "http://localhost:6271/api/tenant/GetComplaints/";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json; charset=utf-8' });
    }
    ConcernService.prototype.saveComplaint = function (_complaint) {
        /*return this._http.post(this._saveConcerntUrl, JSON.stringify(_complaint), {headers: this.headers})
            .catch(this.handleError);*/
        var bodyString = JSON.stringify(_complaint); // Stringify payload
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        return this._http.post(this._saveConcernUrl, _complaint, options) // ...using post request
            .catch(this.handleError);
    };
    ConcernService.prototype.getComplaints = function (tenantID) {
        return this._http.get(this._getConcenrsUrl + tenantID)
            .map(function (response) { return response.json(); })
            .do(function (data) { return JSON.stringify(data); })
            .catch(this.handleError);
    };
    ConcernService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return ConcernService;
}());
ConcernService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ConcernService);
exports.ConcernService = ConcernService;
//# sourceMappingURL=concern.service.js.map