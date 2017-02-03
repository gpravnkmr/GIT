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
var core_2 = require("angular2-cookie/core");
var CookiesService = (function () {
    function CookiesService(cookieService) {
        this.cookieService = cookieService;
    }
    CookiesService.prototype.getCookie = function (key) {
        return this.cookieService.get(key);
    };
    CookiesService.prototype.setCookie = function (key, value) {
        var expiresDate = new Date();
        expiresDate.setDate(expiresDate.getDate() + 7);
        this.option = { expires: expiresDate.toDateString() };
        this.cookieService.put(key, value, this.option);
    };
    CookiesService.prototype.deleteCookie = function (key) {
        this.cookieService.remove(key);
    };
    CookiesService.prototype.removeAllCookies = function () {
        this.cookieService.removeAll();
    };
    return CookiesService;
}());
CookiesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_2.CookieService])
], CookiesService);
exports.CookiesService = CookiesService;
//# sourceMappingURL=CookiesService.js.map