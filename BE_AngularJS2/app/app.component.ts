import {Component, OnInit} from '@angular/core'
import {CookiesService} from './Shared/CookiesService'
import { Router } from '@angular/router';
import {SharedService} from './shared/shared.service'

@Component({
    selector: 'be-app',
    templateUrl: 'app/app.component.html',
    providers:[CookiesService,SharedService]
})
export class AppComponent implements OnInit{
    IsUserLoggedIn:boolean=false;
    constructor(private _cookieService:CookiesService,
                private router:Router,
                private _sharedService:SharedService) {
         this.IsUserLoggedIn=this._sharedService.getEmittedValue().subscribe((item:boolean) => this.IsUserLoggedIn=item);
    }

    ngOnInit():void{
        if(this._cookieService.getCookie("BE_UserRole")!=undefined){
            this.IsUserLoggedIn=true;
        }
        else{
            this.IsUserLoggedIn=false;
        }
    }

    LogoutClick():void{
        this.IsUserLoggedIn=false;
        this._cookieService.removeAllCookies();
        this.router.navigate(["welcome"]);
    }

    goback():void{
        window.history.back();
    }
}