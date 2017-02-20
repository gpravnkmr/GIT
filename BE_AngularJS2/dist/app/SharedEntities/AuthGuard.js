"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AuthGuard = (function () {
    function AuthGuard(router, _cookieService) {
        this.router = router;
        this._cookieService = _cookieService;
    }
    AuthGuard.prototype.canActivate = function () {
        // Check to see if a user has a valid JWT
        if (this.CookiePresent()) {
            // If they do, return true and allow the user to load the home component
            return true;
        }
        // If not, they redirect them to the login page
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard.prototype.CookiePresent = function () {
        if (this._cookieService.getCookie("BE_UserRole") != undefined) {
            return true;
        }
        else {
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    core_1.Injectable()
], AuthGuard);
exports.AuthGuard = AuthGuard;
