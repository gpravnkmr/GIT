import {Component, OnInit} from '@angular/core'
import {CookiesService} from '../SharedServices/CookiesService'
import { Router } from '@angular/router';

@Component({
    selector:'be-welcome',
    templateUrl:'app/welcome/welcome.component.html',
    styleUrls:['app/welcome/welcome.css']
})
export class WelcomeComponent implements OnInit{

    constructor(private _cookieService:CookiesService,
        private router:Router){}
        
    ngOnInit(){
        if(this._cookieService.getCookie("BE_UserRole")!=undefined){
            this.router.navigate(["home"]);
        }
    }

}