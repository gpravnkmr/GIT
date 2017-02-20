// Import our dependencies
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { WelcomeComponent } from './Welcome/welcome.component'
import { HomeComponent } from './Home/home.component'
import { RentReceiptsComponent } from './Tenant/rentreceipt.component'
import { ConcernComponent } from './Tenant/concern.component'
import { ExitRequestComponent } from './Tenant/exitrequest.component'
import { PayRentComponent } from './Tenant/payrent.component'
import { ProfileComponent } from './Shared/updateprofile.component'
import { LoginService } from './login/login.services'
import { AuthGuard } from './SharedEntities/AuthGuard'



// Define which component should be loaded based on the current URL
export const routes: Routes = [
    { path: 'welcome', component: WelcomeComponent }
    , { path: 'login', component: LoginComponent }
    , { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }
    , { path: 'payrent', component: PayRentComponent, canActivate: [AuthGuard] }
    , { path: 'rentreceipts', component: RentReceiptsComponent, canActivate: [AuthGuard] }
    , { path: 'concerns', component: ConcernComponent, canActivate: [AuthGuard] }
    , { path: 'updateprofile', component: ProfileComponent, canActivate: [AuthGuard] }
    , { path: 'exitrequest', component: ExitRequestComponent, canActivate: [AuthGuard] }
    , { path: '', redirectTo: 'welcome', pathMatch: 'full' }];