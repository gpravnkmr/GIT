import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

//Import the required entities
import { ITenant } from './tenant'
import { Concern } from '../SharedEntities/concern'
//Import the required services
import { CookiesService } from '../SharedServices/CookiesService'
import { ConcernService } from './concern.service'
import { ProfileService } from '../SharedServices/profile.service'

@Component({
    selector: 'be-concern',
    templateUrl: 'app/Tenant/concern.component.html',
    providers: [CookiesService,
        ProfileService,
        ConcernService]
})
export class ConcernComponent implements OnInit {
    tenantID: string;
    _tenant: ITenant;
    tenantName: string = "";
    tenantBranch: string = "";
    tenantRoomNumber: string = "";
    complaintDetails: string = "";
    complaintStatus: string = "New";
    _complaints: Concern[];
    _complaint: Concern;
    saveDisabled: boolean = false;
    StatusMessage: string = "";
    errorMessage: string = "";
    _editedComplaintID: number = 0;

    constructor(private _profileService: ProfileService
        , private _cookieService: CookiesService
        , private router: Router
        , private _concernService: ConcernService) {
    }

    goback(): void {
        this.router.navigate(["home"]);
    }

    ngOnInit(): void {
        this.GetTenantDetails();
    }

    GetTenantDetails() {
        this.tenantID = this._cookieService.getCookie("BE_TenantID");
        this._profileService.getTenant(this.tenantID)
            .subscribe(_tenantDetails => {
                this.InitializeTenant(_tenantDetails);
            },
            error => {
            }
            );
        this._concernService.getComplaints(this.tenantID)
            .subscribe(
            _concerns => {
                this._complaints = _concerns;
            },
            error => {
                this.errorMessage = <any>error;
            }
            );
    }
    
    InitializeTenant(_tenantDetails: ITenant): void {
        this._tenant = _tenantDetails;
        this.tenantName = _tenantDetails.TenantName;
        this.tenantBranch = _tenantDetails.BranchDetails.BranchName;
        this.tenantRoomNumber = _tenantDetails.RoomNumber;
    }

    RaiseComplaint(): boolean {
        this.saveDisabled = true;
        this._complaint = new Concern();
        this._complaint.ComplaintID = this._editedComplaintID;
        this._complaint.TenantID = <number><any>this.tenantID;
        this._complaint.ComplaintDescription = this.complaintDetails;
        this._complaint.ComplaintStatus = this.complaintStatus;
        this._concernService.saveComplaint(this._complaint).subscribe(_result => { this.ShowSuccessMessage(_result); }
            , error => { console.log(error) });
        this.saveDisabled = false;
        return false;
    }

    ShowSuccessMessage(_result: any): void {
        this.complaintDetails = "";
        this.complaintStatus = "New";
        this.StatusMessage = "Complaint registered successfully!";
        this._concernService.getComplaints(this.tenantID)
            .subscribe(
            _concerns => {
                this._complaints = _concerns;
            },
            error => {
                this.errorMessage = <any>error;
            }
            );
    }

    EditComment(complaintID: number): void {
        this._editedComplaintID = complaintID;
        this._complaint = this._complaints.find(function (p) { return p.ComplaintID === complaintID; });
        this.complaintStatus = this._complaint.ComplaintStatus;
        this.complaintDetails = this._complaint.ComplaintDescription;
    }

    reset(): void {
        this.StatusMessage = "";
        this.GetTenantDetails();
    }
}