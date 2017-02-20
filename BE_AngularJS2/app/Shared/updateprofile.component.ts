import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
//Import the Required Entities
import { IEmployee } from '../SharedEntities/employee'
import { ITenant } from '../Tenant/tenant'
//Import the required services
import { CookiesService } from '../SharedServices/CookiesService'
import { ProfileService } from '../SharedServices/profile.service'

@Component({
    selector: 'be-up',
    templateUrl: 'app/Shared/updateprofile.component.html',
    providers: [CookiesService
        , ProfileService]
})
export class ProfileComponent implements OnInit {
    userName: string;
    userEmail: string;
    userPhoneNo: string;
    userPassword: string;
    tenantID: string;
    employeeID: string;
    _employee: IEmployee;
    _tenant: ITenant;
    StatusMessage: string = "";
    constructor(private router: Router
        , private _cookieService: CookiesService
        , private _profileService: ProfileService) {

    }

    goback(): void {
        this.router.navigate(["home"]);
    }

    ngOnInit() {
        this.LoadUserDetails();
    }

    GetTenantDetails(_tenantID: string) {
        this._profileService.getTenant(this.tenantID)
            .subscribe(_tenantDetails => {
                this._tenant = _tenantDetails;
                this.userName = _tenantDetails.Name;
                this.userEmail = _tenantDetails.Email;;
                this.userPhoneNo = _tenantDetails.PhoneNo;;
                this.userPassword = _tenantDetails.LoginPassword;
            },
            error => {
            }
            );
    }

    LoadUserDetails() {
        this.tenantID = this._cookieService.getCookie("BE_TenantID");
        this.employeeID = this._cookieService.getCookie("BE_TenantID");
        if (this.tenantID != null && this.tenantID != "") {
            this.GetTenantDetails(this.tenantID);
        }
        else if (this.employeeID != null && this.employeeID != "") {
            this.GetEmployeeDetails(this.employeeID);
        }
    }

    GetEmployeeDetails(_employeeID: string) {

    }


    InitializeEmployee(_employeeDetails: IEmployee): void {
    }

    updateProfile(): void {
        this.tenantID = this._cookieService.getCookie("BE_TenantID");
        this.employeeID = this._cookieService.getCookie("BE_TenantID");
        if (this.tenantID != null && this.tenantID != "") {
            this._tenant.Email = this.userEmail;
            this._tenant.PhoneNo = this.userPhoneNo;
            this._tenant.Name = this.userName;
            this._tenant.LoginPassword = this.userPassword;
            this._profileService.saveTenant(this._tenant)
                .subscribe(
                _response => {
                    this.StatusMessage = "Profile updated successfully!";
                },
                error => {
                    this.StatusMessage = "Profile updated failed!";
                }
                );
        }
        else if (this.employeeID != null && this.employeeID != "") {

        }
    }

    reset(): void {
        this.StatusMessage = "";
        this.LoadUserDetails();
    }
}