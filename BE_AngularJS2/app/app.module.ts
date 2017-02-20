import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

//Import the dependent modules
import { TenantModule } from './Tenant/tenant.module'
import { ManagerModule } from './Manager/manager.module'

//Import the required components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'
import { WelcomeComponent } from './Welcome/welcome.component'
import { HomeComponent } from './Home/home.component'
import { ProfileComponent } from './Shared/updateprofile.component'

//Import the required services
import { LoginService } from './login/login.services'
import { CookieService } from 'angular2-cookie/services/cookies.service'
import { AuthGuard } from './SharedEntities/AuthGuard';
import { CookiesService } from './SharedServices/CookiesService';

@NgModule({
        imports: [BrowserModule
                , FormsModule
                , HttpModule
                , TenantModule.forRoot()
                , ManagerModule.forRoot()
                , RouterModule.forRoot(routes)],
        declarations: [AppComponent
                , LoginComponent
                , WelcomeComponent
                , HomeComponent
                , ProfileComponent],
        providers: [LoginService, CookieService, AuthGuard, CookiesService],
        bootstrap: [AppComponent]
})
export class AppModule {

}