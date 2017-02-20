"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
//Import the required components
var payrent_component_1 = require("./payrent.component");
var rentreceipt_component_1 = require("./rentreceipt.component");
var exitrequest_component_1 = require("./exitrequest.component");
var concern_component_1 = require("./concern.component");
//Import the required services
var payrent_service_1 = require("./payrent.service");
var rentreceipt_service_1 = require("./rentreceipt.service");
var exitrequest_service_1 = require("./exitrequest.service");
var concern_service_1 = require("./concern.service");
var TenantModule = TenantModule_1 = (function () {
    function TenantModule() {
    }
    TenantModule.forRoot = function () {
        return {
            ngModule: TenantModule_1,
            providers: [payrent_service_1.PayRentService,
                rentreceipt_service_1.RentReceiptService,
                exitrequest_service_1.ExitRequestService,
                concern_service_1.ConcernService]
        };
    };
    return TenantModule;
}());
TenantModule = TenantModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpModule],
        declarations: [payrent_component_1.PayRentComponent,
            rentreceipt_component_1.RentReceiptsComponent,
            exitrequest_component_1.ExitRequestComponent,
            concern_component_1.ConcernComponent],
        exports: [payrent_component_1.PayRentComponent]
    })
], TenantModule);
exports.TenantModule = TenantModule;
var TenantModule_1;
