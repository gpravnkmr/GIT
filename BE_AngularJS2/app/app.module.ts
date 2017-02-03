import { NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import {LoginComponent} from './login/login.component'
import {WelcomeComponent} from './Welcome/welcome.component'
import {HomeComponent} from './Home/home.component'
import {LoginService} from './login/login.services'
import {PayRentComponent} from './PayRent/payrent.component'
import {CookieService} from 'angular2-cookie/services/cookies.service'

@NgModule({
    imports:[BrowserModule
            ,FormsModule
            ,HttpModule
            ,RouterModule.forRoot([
                    { path: 'welcome', component: WelcomeComponent}
                    ,{ path: 'login', component: LoginComponent }
                    ,{ path: 'home', component: HomeComponent }
                    ,{ path: 'payrent', component: PayRentComponent}
                    ,{ path: '', redirectTo: 'welcome', pathMatch: 'full' }])],
    declarations: [AppComponent
            ,LoginComponent
            ,WelcomeComponent
            ,HomeComponent
            ,PayRentComponent],
    providers: [LoginService,CookieService],
    bootstrap: [AppComponent]
})
export class AppModule{

}