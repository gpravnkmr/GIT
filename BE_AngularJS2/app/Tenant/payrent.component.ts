import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
//Import the required services
import { PayRentService } from './payrent.service'
import { CookiesService } from '../SharedServices/CookiesService'
import { ProfileService } from '../SharedServices/profile.service'
//Import the required entities
import { ITenant } from './tenant'

@Component({
    selector: 'be-payrent',
    templateUrl: 'app/Tenant/payrent.component.html',
    providers: [CookiesService
        , PayRentService
        , ProfileService]
})
export class PayRentComponent implements OnInit {
    tenantID: string;
    _tenant: ITenant;
    tenantName: string = "";
    tenantBranch: string = "";
    tenantRoomNumber: string = "";
    monthofPayment: string = "";
    rent: number = 0;
    rentDisabled: boolean = true;
    constructor(private _payrentService: PayRentService
        , private _cookieService: CookiesService
        , private _profileService: ProfileService
        , private router: Router) {

    }
    ngOnInit(): void {
        this.tenantID = this._cookieService.getCookie("BE_TenantID");
        this._profileService.getTenant(this.tenantID)
            .subscribe(_tenantDetails => {
                this.InitializeTenant(_tenantDetails);
            },
            error => {
            }
            );
    }

    goback(): void {
        this.router.navigate(["home"]);
    }

    InitializeTenant(_tenantDetails: ITenant): void {
        this._tenant = _tenantDetails;
        this.tenantName = _tenantDetails.TenantName;
        this.tenantBranch = _tenantDetails.BranchDetails.BranchName;
        this.tenantRoomNumber = _tenantDetails.RoomNumber;
        this.monthofPayment = _tenantDetails.MonthofPayment;
        this.rent = _tenantDetails.MonthlyRent;
    }

    onPaymentTypeChange(selectedValue: string): void {
        if (selectedValue == "Security Deposit") {
            this.rentDisabled = false;
        }
        else {
            this.rentDisabled = true;
        }
    }
}