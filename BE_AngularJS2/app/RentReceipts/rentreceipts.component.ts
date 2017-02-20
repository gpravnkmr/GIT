import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { IReceipt } from '../Shared/receipt'
import { RentReceiptService } from './rentreceipt.service'
import { CookiesService } from '../Shared/CookiesService'
import { FileDownloadService } from '../Shared/FileDownloadService'

@Component({
    selector: 'be-rc',
    templateUrl: 'app/RentReceipts/rentreceipts.component.html',
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