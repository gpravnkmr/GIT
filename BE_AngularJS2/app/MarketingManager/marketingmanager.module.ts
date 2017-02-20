import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'


@NgModule({
    imports: [CommonModule
        , FormsModule
        , HttpModule],
    declarations: [],
    exports: []
})
export class MarketingManagerModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MarketingManagerModule,
            providers: []
        };
    }
}