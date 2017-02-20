"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_routes_1 = require("./app.routes");
//Import the dependent modules
var tenant_module_1 = require("./Tenant/tenant.module");
var manager_module_1 = require("./Manager/manager.module");
//Import the required components
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var welcome_component_1 = require("./Welcome/welcome.component");
var home_component_1 = require("./Home/home.component");
var updateprofile_component_1 = require("./Shared/updateprofile.component");
//Import the required services
var login_services_1 = require("./login/login.services");
var cookies_service_1 = require("angular2-cookie/services/cookies.service");
var AuthGuard_1 = require("./SharedEntities/AuthGuard");
var CookiesService_1 = require("./SharedServices/CookiesService");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            tenant_module_1.TenantModule.forRoot(),
            manager_module_1.ManagerModule.forRoot(),
            router_1.RouterModule.forRoot(app_routes_1.routes)],
        declarations: [app_component_1.AppComponent,
            login_component_1.LoginComponent,
            welcome_component_1.WelcomeComponent,
            home_component_1.HomeComponent,
            updateprofile_component_1.ProfileComponent],
        providers: [login_services_1.LoginService, cookies_service_1.CookieService, AuthGuard_1.AuthGuard, CookiesService_1.CookiesService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map