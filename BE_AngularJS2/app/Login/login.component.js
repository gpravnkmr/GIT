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
var login_services_1 = require("./login.services");
var router_1 = require("@angular/router");
var CookiesService_1 = require("../SharedServices/CookiesService");
var shared_service_1 = require("../SharedServices/shared.service");
var app_component_1 = require("../app.component");
var LoginComponent = (function () {
    function LoginComponent(route, router, _loginService, _cookieService, _sharedService, _appComponent) {
        this.route = route;
        this.router = router;
        this._loginService = _loginService;
        this._cookieService = _cookieService;
        this._sharedService = _sharedService;
        this._appComponent = _appComponent;
        this.loading = false;
        this.invalidUser = false;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this._loginService.getUser(this.ipUserName, this.ipPassword)
            .subscribe(function (_user) {
            _this.InitializeUser(_user);
        }, function (error) {
            _this.errorMessage = error;
            _this.loading = false;
            _this.invalidUser = true;
        });
    };
    LoginComponent.prototype.InitializeUser = function (_user) {
        this._user = _user;
        this.invalidUser = false;
        this.loading = false;
        this._cookieService.setCookie("BE_UserRole", _user.DesignationID.toString());
        if (_user.TenantID != 0) {
            this._cookieService.setCookie("BE_TenantID", _user.TenantID.toString());
        }
        else if (_user.EmployeeID != 0) {
            this._cookieService.setCookie("BE_EmployeeID", _user.TenantID.toString());
        }
        this._appComponent.IsUserLoggedIn = true;
        this._sharedService.change(true);
        this.router.navigate(["home"]);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'be-login',
        templateUrl: 'app/login/login.component.html',
        providers: [login_services_1.LoginService,
            CookiesService_1.CookiesService,
            shared_service_1.SharedService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        login_services_1.LoginService,
        CookiesService_1.CookiesService,
        shared_service_1.SharedService,
        app_component_1.AppComponent])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map