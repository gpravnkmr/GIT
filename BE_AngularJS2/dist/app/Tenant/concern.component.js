"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var concern_1 = require("../SharedEntities/concern");
//Import the required services
var CookiesService_1 = require("../SharedServices/CookiesService");
var concern_service_1 = require("./concern.service");
var profile_service_1 = require("../SharedServices/profile.service");
var ConcernComponent = (function () {
    function ConcernComponent(_profileService, _cookieService, router, _concernService) {
        this._profileService = _profileService;
        this._cookieService = _cookieService;
        this.router = router;
        this._concernService = _concernService;
        this.tenantName = "";
        this.tenantBranch = "";
        this.tenantRoomNumber = "";
        this.complaintDetails = "";
        this.complaintStatus = "New";
        this.saveDisabled = false;
        this.StatusMessage = "";
        this.errorMessage = "";
        this._editedComplaintID = 0;
    }
    ConcernComponent.prototype.goback = function () {
        this.router.navigate(["home"]);
    };
    ConcernComponent.prototype.ngOnInit = function () {
        this.GetTenantDetails();
    };
    ConcernComponent.prototype.GetTenantDetails = function () {
        var _this = this;
        this.tenantID = this._cookieService.getCookie("BE_TenantID");
        this._profileService.getTenant(this.tenantID)
            .subscribe(function (_tenantDetails) {
            _this.InitializeTenant(_tenantDetails);
        }, function (error) {
        });
        this._concernService.getComplaints(this.tenantID)
            .subscribe(function (_concerns) {
            _this._complaints = _concerns;
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    ConcernComponent.prototype.InitializeTenant = function (_tenantDetails) {
        this._tenant = _tenantDetails;
        this.tenantName = _tenantDetails.TenantName;
        this.tenantBranch = _tenantDetails.BranchDetails.BranchName;
        this.tenantRoomNumber = _tenantDetails.RoomNumber;
    };
    ConcernComponent.prototype.RaiseComplaint = function () {
        var _this = this;
        this.saveDisabled = true;
        this._complaint = new concern_1.Concern();
        this._complaint.ComplaintID = this._editedComplaintID;
        this._complaint.TenantID = this.tenantID;
        this._complaint.ComplaintDescription = this.complaintDetails;
        this._complaint.ComplaintStatus = this.complaintStatus;
        this._concernService.saveComplaint(this._complaint).subscribe(function (_result) { _this.ShowSuccessMessage(_result); }, function (error) { console.log(error); });
        this.saveDisabled = false;
        return false;
    };
    ConcernComponent.prototype.ShowSuccessMessage = function (_result) {
        var _this = this;
        this.complaintDetails = "";
        this.complaintStatus = "New";
        this.StatusMessage = "Complaint registered successfully!";
        this._concernService.getComplaints(this.tenantID)
            .subscribe(function (_concerns) {
            _this._complaints = _concerns;
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    ConcernComponent.prototype.EditComment = function (complaintID) {
        this._editedComplaintID = complaintID;
        this._complaint = this._complaints.find(function (p) { return p.ComplaintID === complaintID; });
        this.complaintStatus = this._complaint.ComplaintStatus;
        this.complaintDetails = this._complaint.ComplaintDescription;
    };
    ConcernComponent.prototype.reset = function () {
        this.StatusMessage = "";
        this.GetTenantDetails();
    };
    return ConcernComponent;
}());
ConcernComponent = __decorate([
    core_1.Component({
        selector: 'be-concern',
        templateUrl: 'app/Tenant/concern.component.html',
        providers: [CookiesService_1.CookiesService,
            profile_service_1.ProfileService,
            concern_service_1.ConcernService]
    })
], ConcernComponent);
exports.ConcernComponent = ConcernComponent;
