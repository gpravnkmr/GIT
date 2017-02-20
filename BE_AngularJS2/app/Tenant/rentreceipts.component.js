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
var router_1 = require("@angular/router");
var rentreceipt_service_1 = require("./rentreceipt.service");
var CookiesService_1 = require("../Shared/CookiesService");
var FileDownloadService_1 = require("../Shared/FileDownloadService");
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
        templateUrl: 'app/Tenant/rentreceipts.component.html',
        providers: [rentreceipt_service_1.RentReceiptService,
            FileDownloadService_1.FileDownloadService]
    }),
    __metadata("design:paramtypes", [rentreceipt_service_1.RentReceiptService,
        CookiesService_1.CookiesService,
        router_1.Router,
        FileDownloadService_1.FileDownloadService])
], RentReceiptsComponent);
exports.RentReceiptsComponent = RentReceiptsComponent;
//# sourceMappingURL=rentreceipts.component.js.map