import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
//Import the required entities
import { IReceipt } from '../SharedEntities/receipt'
//Import the required services
import { RentReceiptService } from './rentreceipt.service'
import { CookiesService } from '../SharedServices/CookiesService'
import { FileDownloadService } from '../SharedServices/FileDownloadService'

@Component({
    selector: 'be-rc',
    templateUrl: 'app/Tenant/rentreceipt.component.html',
    providers: [RentReceiptService
        , FileDownloadService]
})
export class RentReceiptsComponent implements OnInit {
    _receipt: IReceipt[];
    constructor(private _rentReceiptService: RentReceiptService
        , private _cookieServices: CookiesService
        , private router: Router
        , private _fileDownloadService: FileDownloadService) {

    }
    goback(): void {
        this.router.navigate(["home"]);
    }
    downloadFile(paymentID: string): void {
        this._fileDownloadService.getReceiptDetails(paymentID).subscribe();
    }

    ngOnInit() {
        this._rentReceiptService.getReceiptDetails(this._cookieServices.getCookie("BE_TenantID"))
            .subscribe(
            _receipts => {
                this._receipt = _receipts;
            },
            error => {
            }
            );
    }
}