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
var FileDownloadService = (function () {
    function FileDownloadService(_http) {
        this._http = _http;
        this._downloadUrl = 'http://localhost:6271/api/tenant/GetReceiptDetails/';
    }
    FileDownloadService.prototype.getReceiptDetails = function (paymentID) {
        // Parameters obj-
        /*let params: URLSearchParams = new URLSearchParams();
        params.set('userName', userName);
        params.set('password', password);*/
        return this._http.get(this._downloadUrl + paymentID)
            .map(function (response) { return response; })
            .do(function (data) {
            var headers = data.headers;
            var contentType = headers.get("Content-Type");
            var name = headers.get("name");
            // Initialize Blob
            var blob = new Blob([data.text()], { type: contentType });
            // Make the download process
            var a = window.document.createElement("a");
            a.href = window.URL.createObjectURL(blob);
            a.download = name;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        })
            .catch(this.handleError);
    };
    FileDownloadService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return FileDownloadService;
}());
FileDownloadService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FileDownloadService);
exports.FileDownloadService = FileDownloadService;
//# sourceMappingURL=FileDownloadService.js.map