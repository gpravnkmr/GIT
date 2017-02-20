import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
//Import the Components part of Manager Module
import { CashReceiptComponent } from './cashreceipt.component'
import { ViewComplaintsComponent } from './viewcomplaints.component'
import { AttendanceComponent } from './attendance.component'
import { ExpenditureComponent } from './expenditure.component'
//Import the services part of Manager Module
import { CashReceiptService } from './cashreceipt.service'
import { ViewComplaintsService } from './viewcomplaints.service'
import { AttendanceService } from './attendance.service'
import { ExpenditureService } from './expenditure.service'

@NgModule({
    imports: [CommonModule
        , FormsModule
        , HttpModule],
    declarations: [CashReceiptComponent
        , ViewComplaintsComponent
        , AttendanceComponent
        , ExpenditureComponent],
    exports: [CashReceiptComponent]
})
export class ManagerModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ManagerModule,
            providers: [CashReceiptService
                , ViewComplaintsService
                , AttendanceService
                , ExpenditureService]
        };
    }
}