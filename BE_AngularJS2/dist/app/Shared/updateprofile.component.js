"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
//Import the required services
var CookiesService_1 = require("../SharedServices/CookiesService");
var profile_service_1 = require("../SharedServices/profile.service");
var ProfileComponent = (function () {
    function ProfileComponent(router, _cookieService, _profileService) {
        this.router = router;
        this._cookieService = _cookieService;
        this._profileService = _profileService;
        this.StatusMessage = "";
    }
    ProfileComponent.prototype.goback = function () {
        this.router.navigate(["home"]);
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.LoadUserDetails();
    };
    ProfileComponent.prototype.GetTenantDetails = function (_tenantID) {
        var _this = this;
        this._profileService.getTenant(this.tenantID)
            .subscribe(function (_tenantDetails) {
            _this._tenant = _tenantDetails;
            _this.userName = _tenantDetails.Name;
            _this.userEmail = _tenantDetails.Email;
            ;
            _this.userPhoneNo = _tenantDetails.PhoneNo;
            ;
            _this.userPassword = _tenantDetails.LoginPassword;
        }, function (error) {
        });
    };
    ProfileComponent.prototype.LoadUserDetails = function () {
        this.tenantID = this._cookieService.getCookie("BE_TenantID");
        this.employeeID = this._cookieService.getCookie("BE_TenantID");
        if (this.tenantID != null && this.tenantID != "") {
            this.GetTenantDetails(this.tenantID);
        }
        else if (this.employeeID != null && this.employeeID != "") {
            this.GetEmployeeDetails(this.employeeID);
        }
    };
    ProfileComponent.prototype.GetEmployeeDetails = function (_employeeID) {
    };
    ProfileComponent.prototype.InitializeEmployee = function (_employeeDetails) {
    };
    ProfileComponent.prototype.updateProfile = function () {
        var _this = this;
        this.tenantID = this._cookieService.getCookie("BE_TenantID");
        this.employeeID = this._cookieService.getCookie("BE_TenantID");
        if (this.tenantID != null && this.tenantID != "") {
            this._tenant.Email = this.userEmail;
            this._tenant.PhoneNo = this.userPhoneNo;
            this._tenant.Name = this.userName;
            this._tenant.LoginPassword = this.userPassword;
            this._profileService.saveTenant(this._tenant)
                .subscribe(function (_response) {
                _this.StatusMessage = "Profile updated successfully!";
            }, function (error) {
                _this.StatusMessage = "Profile updated failed!";
            });
        }
        else if (this.employeeID != null && this.employeeID != "") {
        }
    };
    ProfileComponent.prototype.reset = function () {
        this.StatusMessage = "";
        this.LoadUserDetails();
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'be-up',
        templateUrl: 'app/Shared/updateprofile.component.html',
        providers: [CookiesService_1.CookiesService,
            profile_service_1.ProfileService]
    })
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
