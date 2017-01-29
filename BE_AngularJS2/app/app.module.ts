import { NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import {LoginComponent} from './login/login.component'
import {WelcomeComponent} from './home/welcome.component'
import {LoginService} from './login/login.services'

@NgModule({
    imports:[BrowserModule
            ,FormsModule
            ,HttpModule
            ,RouterModule.forRoot([
                    {path: 'welcome', component: WelcomeComponent}
                    ,{ path: 'login', component: LoginComponent }
                    ,{ path: '', redirectTo: 'welcome', pathMatch: 'full' }])],
    declarations: [AppComponent
            ,LoginComponent
            ,WelcomeComponent],
    providers: [LoginService],
    bootstrap: [AppComponent]
})
export class AppModule{

}