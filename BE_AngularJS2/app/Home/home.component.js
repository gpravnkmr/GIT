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
var CookiesService_1 = require("../Shared/CookiesService");
var router_1 = require("@angular/router");
var home_service_1 = require("./home.service");
var HomeComponent = (function () {
    function HomeComponent(_CookiesService, _router, _homeService) {
        this._CookiesService = _CookiesService;
        this._router = _router;
        this._homeService = _homeService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._CookiesService.getCookie("BE_UserRole")) {
            this._homeService.getUser(this._CookiesService.getCookie("BE_UserRole"))
                .subscribe(function (_menus) {
                _this.MenuOptions = _menus;
            }, function (error) {
                _this.errorMessage = error;
            });
        }
        else {
            this._router.navigate(["welcome"]);
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'be-home',
        templateUrl: 'app/home/home.component.html',
        providers: [CookiesService_1.CookiesService,
            home_service_1.HomeService]
    }),
    __metadata("design:paramtypes", [CookiesService_1.CookiesService,
        router_1.Router,
        home_service_1.HomeService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map