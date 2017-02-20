"use strict";
var login_component_1 = require("./login/login.component");
var welcome_component_1 = require("./Welcome/welcome.component");
var home_component_1 = require("./Home/home.component");
var rentreceipt_component_1 = require("./Tenant/rentreceipt.component");
var concern_component_1 = require("./Tenant/concern.component");
var exitrequest_component_1 = require("./Tenant/exitrequest.component");
var payrent_component_1 = require("./Tenant/payrent.component");
var updateprofile_component_1 = require("./Shared/updateprofile.component");
var AuthGuard_1 = require("./SharedEntities/AuthGuard");
// Define which component should be loaded based on the current URL
exports.routes = [
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'home', component: home_component_1.HomeComponent, canActivate: [AuthGuard_1.AuthGuard] },
    { path: 'payrent', component: payrent_component_1.PayRentComponent, canActivate: [AuthGuard_1.AuthGuard] },
    { path: 'rentreceipts', component: rentreceipt_component_1.RentReceiptsComponent, canActivate: [AuthGuard_1.AuthGuard] },
    { path: 'concerns', component: concern_component_1.ConcernComponent, canActivate: [AuthGuard_1.AuthGuard] },
    { path: 'updateprofile', component: updateprofile_component_1.ProfileComponent, canActivate: [AuthGuard_1.AuthGuard] },
    { path: 'exitrequest', component: exitrequest_component_1.ExitRequestComponent, canActivate: [AuthGuard_1.AuthGuard] },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' }
];
//# sourceMappingURL=app.routes.js.map