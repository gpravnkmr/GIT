import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

//Import the required components
import { PayRentComponent } from './payrent.component'
import { RentReceiptsComponent } from './rentreceipt.component'
import { ExitRequestComponent } from './exitrequest.component'
import { ConcernComponent } from './concern.component'

//Import the required services
import { PayRentService } from './payrent.service'
import { RentReceiptService } from './rentreceipt.service'
import { ExitRequestService } from './exitrequest.service'
import { ConcernService } from './concern.service'

@NgModule({
    imports: [CommonModule
        , FormsModule
        , HttpModule],
    declarations: [PayRentComponent
        , RentReceiptsComponent
        , ExitRequestComponent
        , ConcernComponent],
    exports: [PayRentComponent]
})
export class TenantModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: TenantModule,
            providers: [PayRentService
                , RentReceiptService
                , ExitRequestService
                , ConcernService]
        };
    }
}