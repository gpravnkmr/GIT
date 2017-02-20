"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
//Import the required services
var payrent_service_1 = require("./payrent.service");
var CookiesService_1 = require("../SharedServices/CookiesService");
var profile_service_1 = require("../SharedServices/profile.service");
var PayRentComponent = (function () {
    function PayRentComponent(_payrentService, _cookieService, _profileService, router) {
        this._payrentService = _payrentService;
        this._cookieService = _cookieService;
        this._profileService = _profileService;
        this.router = router;
        this.tenantName = "";
        this.tenantBranch = "";
        this.tenantRoomNumber = "";
        this.monthofPayment = "";
        this.rent = 0;
        this.rentDisabled = true;
    }
    PayRentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tenantID = this._cookieService.getCookie("BE_TenantID");
        this._profileService.getTenant(this.tenantID)
            .subscribe(function (_tenantDetails) {
            _this.InitializeTenant(_tenantDetails);
        }, function (error) {
        });
    };
    PayRentComponent.prototype.goback = function () {
        this.router.navigate(["home"]);
    };
    PayRentComponent.prototype.InitializeTenant = function (_tenantDetails) {
        this._tenant = _tenantDetails;
        this.tenantName = _tenantDetails.TenantName;
        this.tenantBranch = _tenantDetails.BranchDetails.BranchName;
        this.tenantRoomNumber = _tenantDetails.RoomNumber;
        this.monthofPayment = _tenantDetails.MonthofPayment;
        this.rent = _tenantDetails.MonthlyRent;
    };
    PayRentComponent.prototype.onPaymentTypeChange = function (selectedValue) {
        if (selectedValue == "Security Deposit") {
            this.rentDisabled = false;
        }
        else {
            this.rentDisabled = true;
        }
    };
    return PayRentComponent;
}());
PayRentComponent = __decorate([
    core_1.Component({
        selector: 'be-payrent',
        templateUrl: 'app/Tenant/payrent.component.html',
        providers: [CookiesService_1.CookiesService,
            payrent_service_1.PayRentService,
            profile_service_1.ProfileService]
    })
], PayRentComponent);
exports.PayRentComponent = PayRentComponent;
