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
var CookiesService_1 = require("./Shared/CookiesService");
var router_1 = require("@angular/router");
var shared_service_1 = require("./shared/shared.service");
var AppComponent = (function () {
    function AppComponent(_cookieService, router, _sharedService) {
        var _this = this;
        this._cookieService = _cookieService;
        this.router = router;
        this._sharedService = _sharedService;
        this.IsUserLoggedIn = false;
        this.IsUserLoggedIn = this._sharedService.getEmittedValue().subscribe(function (item) { return _this.IsUserLoggedIn = item; });
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this._cookieService.getCookie("BE_UserRole") != undefined) {
            this.IsUserLoggedIn = true;
        }
        else {
            this.IsUserLoggedIn = false;
        }
    };
    AppComponent.prototype.LogoutClick = function () {
        this.IsUserLoggedIn = false;
        this._cookieService.removeAllCookies();
        this.router.navigate(["welcome"]);
    };
    AppComponent.prototype.goback = function () {
        window.history.back();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'be-app',
        templateUrl: 'app/app.component.html',
        providers: [CookiesService_1.CookiesService, shared_service_1.SharedService]
    }),
    __metadata("design:paramtypes", [CookiesService_1.CookiesService,
        router_1.Router,
        shared_service_1.SharedService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map