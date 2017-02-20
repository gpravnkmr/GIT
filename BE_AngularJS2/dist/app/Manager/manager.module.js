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
//Import the Components part of Manager Module
var cashreceipt_component_1 = require("./cashreceipt.component");
var viewcomplaints_component_1 = require("./viewcomplaints.component");
var attendance_component_1 = require("./attendance.component");
var expenditure_component_1 = require("./expenditure.component");
//Import the services part of Manager Module
var cashreceipt_service_1 = require("./cashreceipt.service");
var viewcomplaints_service_1 = require("./viewcomplaints.service");
var attendance_service_1 = require("./attendance.service");
var expenditure_service_1 = require("./expenditure.service");
var ManagerModule = ManagerModule_1 = (function () {
    function ManagerModule() {
    }
    ManagerModule.forRoot = function () {
        return {
            ngModule: ManagerModule_1,
            providers: [cashreceipt_service_1.CashReceiptService,
                viewcomplaints_service_1.ViewComplaintsService,
                attendance_service_1.AttendanceService,
                expenditure_service_1.ExpenditureService]
        };
    };
    return ManagerModule;
}());
ManagerModule = ManagerModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpModule],
        declarations: [cashreceipt_component_1.CashReceiptComponent,
            viewcomplaints_component_1.ViewComplaintsComponent,
            attendance_component_1.AttendanceComponent,
            expenditure_component_1.ExpenditureComponent],
        exports: [cashreceipt_component_1.CashReceiptComponent]
    })
], ManagerModule);
exports.ManagerModule = ManagerModule;
var ManagerModule_1;
