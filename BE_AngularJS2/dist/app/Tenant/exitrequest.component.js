"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var exitrequest_service_1 = require("./exitrequest.service");
var profile_service_1 = require("../SharedServices/profile.service");
var ExitRequestComponent = (function () {
    function ExitRequestComponent(_cookieService, _profileService, _exitRequestService, router) {
        this._cookieService = _cookieService;
        this._profileService = _profileService;
        this._exitRequestService = _exitRequestService;
        this.router = router;
        this.StatusMessage = "";
        this.validationFailed = false;
    }
    ExitRequestComponent.prototype.ngOnInit = function () {
        this.GetTenantDetails();
    };
    ExitRequestComponent.prototype.GetTenantDetails = function () {
        var _this = this;
        this.tenantID = this._cookieService.getCookie("BE_TenantID");
        this._profileService.getTenant(this.tenantID).subscribe(function (_tenantDetail) { _this.InitializeTenant(_tenantDetail); }, function (error) { });
    };
    ExitRequestComponent.prototype.InitializeTenant = function (_tenantDetail) {
        this._tenant = _tenantDetail;
        this.tenantName = _tenantDetail.TenantName;
        this.tenantEmail = _tenantDetail.Email;
        this.tenantPhoneNo = _tenantDetail.PhoneNo;
        this.tenantdoe = _tenantDetail.DOE;
        this._currentdoe = _tenantDetail.DOE;
        if (this.tenantdoe) {
            this.validationFailed = true;
            this.StatusMessage = "Exit request has aready been raised. No changes can be made.";
        }
    };
    ExitRequestComponent.prototype.updateExitDate = function () {
        var _this = this;
        this._tenant.DOE = this._currentdoe;
        this._exitRequestService.UpdateExitRequest(this._tenant).subscribe(function (_response) { _this.StatusMessage = "Exit request registered successfully."; }, function (error) {
            _this.validationFailed = true;
            _this.StatusMessage = "Exit request not raised.";
        });
    };
    ExitRequestComponent.prototype.reset = function () {
        this.StatusMessage = "";
        this.GetTenantDetails();
    };
    ExitRequestComponent.prototype.goback = function () {
        this.router.navigate(["home"]);
    };
    return ExitRequestComponent;
}());
ExitRequestComponent = __decorate([
    core_1.Component({
        selector: 'be-er',
        templateUrl: 'app/Tenant/exitrequest.component.html',
        providers: [profile_service_1.ProfileService,
            exitrequest_service_1.ExitRequestService]
    })
], ExitRequestComponent);
exports.ExitRequestComponent = ExitRequestComponent;
