import {Component,OnInit} from '@angular/core'
import {LoginService} from './login.services'
import {IUser} from './User'
import { Router, ActivatedRoute } from '@angular/router';
import {CookiesService} from '../Shared/CookiesService';
import {SharedService} from '../Shared/shared.service'
import {AppComponent} from '../app.component'

@Component({
    selector:'be-login',
    templateUrl:'app/login/login.component.html',
    providers:[LoginService,
                CookiesService,
                SharedService]
})
export class LoginComponent implements OnInit{
    PageTitle: string;
    ipUserName:string;
    ipPassword:string;
    _user:IUser;
    errorMessage: string;
    loading:boolean = false;
    invalidUser:boolean=false;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private _loginService: LoginService,
        private _cookieService:CookiesService,
        private _sharedService:SharedService,
        private _appComponent:AppComponent) {
    }

    login():void{
        this.loading = true;
        this._loginService.getUser(this.ipUserName,this.ipPassword)
                .subscribe(_user => 
                            {
                                this.InitializeUser(_user);                            
                            },
                           error => 
                           {
                            this.errorMessage = <any>error;
                            this.loading = false;
                            this.invalidUser=true;
                            }
                        );        
    }

    InitializeUser(_user:IUser):void{
        this._user = _user;
        this.invalidUser=false;
        this.loading = false;
        this._cookieService.setCookie("BE_UserRole",_user.DesignationID.toString());
        if(!_user.TenantID && _user.TenantID!=0){
            this._cookieService.setCookie("BE_TenantID",_user.TenantID.toString());
        }
        else if(!_user.EmployeeID && _user.EmployeeID!=0){
            this._cookieService.setCookie("BE_EmployeeID",_user.TenantID.toString());
        }
        this._appComponent.IsUserLoggedIn=true;
        this._sharedService.change(true);
        this.router.navigate(["home"]);
    }

    ngOnInit():void{
    }
}