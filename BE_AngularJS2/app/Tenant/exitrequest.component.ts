import { Component, OnInit } from '@angular/core'
//Import the required entities
import { Router } from '@angular/router'
import { ITenant } from './tenant'
//Import the required Services
import { CookiesService } from '../SharedServices/CookiesService'
import { ExitRequestService } from './exitrequest.service'
import { ProfileService } from '../SharedServices/profile.service'

@Component({
    selector: 'be-er',
    templateUrl: 'app/Tenant/exitrequest.component.html',
    providers: [ProfileService
        , ExitRequestService]
})
export class ExitRequestComponent implements OnInit {
    _tenant: ITenant;
    tenantID: string;
    tenantName: string;
    tenantEmail: string;
    tenantPhoneNo: string;
    tenantdoe: string;
    _currentdoe: string;
    StatusMessage: string = "";
    validationFailed: boolean = false;

    constructor(private _cookieService: CookiesService
        , private _profileService: ProfileService
        , private _exitRequestService: ExitRequestService
        , private router: Router) {

    }
    ngOnInit() {
        this.GetTenantDetails();
    }

    GetTenantDetails() {
        this.tenantID = this._cookieService.getCookie("BE_TenantID");
        this._profileService.getTenant(this.tenantID).subscribe(
            _tenantDetail =>
            { this.InitializeTenant(_tenantDetail); },
            error =>
            { });
    }
    InitializeTenant(_tenantDetail: ITenant) {
        this._tenant = _tenantDetail;
        this.tenantName = _tenantDetail.TenantName;
        this.tenantEmail = _tenantDetail.Email;
        this.tenantPhoneNo = _tenantDetail.PhoneNo;
        this.tenantdoe = _tenantDetail.DOE;
        this._currentdoe = _tenantDetail.DOE;
        if (this.tenantdoe) {
            this.validationFailed = true;
            this.StatusMessage = "Exit request has aready been raised. No changes can be made.";
        }
    }

    updateExitDate() {
        this._tenant.DOE = this._currentdoe;
        this._exitRequestService.UpdateExitRequest(this._tenant).subscribe(
            _response => { this.StatusMessage = "Exit request registered successfully."; },
            error => {
                this.validationFailed = true;
                this.StatusMessage = "Exit request not raised.";
            }
        );
    }

    reset(): void {
        this.StatusMessage = "";
        this.GetTenantDetails();
    }

    goback(): void {
        this.router.navigate(["home"]);
    }
}