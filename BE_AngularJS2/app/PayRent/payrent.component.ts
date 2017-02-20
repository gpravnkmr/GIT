import { Component, OnInit } from '@angular/core'
import {Router} from '@angular/router'
import { PayRentService } from './payrent.service'
import { CookiesService } from '../Shared/CookiesService'
import { ITenant } from '../Shared/tenant'
@Component({
    selector: 'be-payrent',
    templateUrl: 'app/payrent/payrent.component.html',
    providers: [CookiesService,
        PayRentService]
})
export class PayRentComponent implements OnInit {
    tenantID: string;
    _tenant: ITenant;
    tenantName: string = "";
    tenantBranch: string = "";
    tenantRoomNumber: string = "";
    monthofPayment: string = "";
    rent: number = 0;
    rentDisabled:boolean=true;
    constructor(private _payrentService: PayRentService
        , private _cookieService: CookiesService
        , private router: Router) {

    }
    ngOnInit(): void {
        this.tenantID = this._cookieService.getCookie("BE_TenantID");
        this._payrentService.getUser(this.tenantID)
            .subscribe(_tenantDetails => {
                this.InitializeTenant(_tenantDetails);
            },
            error => {
            }
            );;
        //getUser
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

    onPaymentTypeChange(selectedValue:string):void{
        if(selectedValue=="Security Deposit")
        {
            this.rentDisabled=false;
        }
        else
        {
            this.rentDisabled=true;
        }
    }
}