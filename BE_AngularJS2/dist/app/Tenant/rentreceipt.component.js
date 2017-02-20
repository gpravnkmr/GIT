"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
//Import the required services
var rentreceipt_service_1 = require("./rentreceipt.service");
var FileDownloadService_1 = require("../SharedServices/FileDownloadService");
var RentReceiptsComponent = (function () {
    function RentReceiptsComponent(_rentReceiptService, _cookieServices, router, _fileDownloadService) {
        this._rentReceiptService = _rentReceiptService;
        this._cookieServices = _cookieServices;
        this.router = router;
        this._fileDownloadService = _fileDownloadService;
    }
    RentReceiptsComponent.prototype.goback = function () {
        this.router.navigate(["home"]);
    };
    RentReceiptsComponent.prototype.downloadFile = function (paymentID) {
        this._fileDownloadService.getReceiptDetails(paymentID).subscribe();
    };
    RentReceiptsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._rentReceiptService.getReceiptDetails(this._cookieServices.getCookie("BE_TenantID"))
            .subscribe(function (_receipts) {
            _this._receipt = _receipts;
        }, function (error) {
        });
    };
    return RentReceiptsComponent;
}());
RentReceiptsComponent = __decorate([
    core_1.Component({
        selector: 'be-rc',
        templateUrl: 'app/Tenant/rentreceipt.component.html',
        providers: [rentreceipt_service_1.RentReceiptService,
            FileDownloadService_1.FileDownloadService]
    })
], RentReceiptsComponent);
exports.RentReceiptsComponent = RentReceiptsComponent;
