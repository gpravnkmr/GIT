import {Component,OnInit} from '@angular/core'
import {LoginService} from './login.services'
import {IUser} from './User'

@Component({
    selector:'be-login',
    templateUrl:'app/login/login.component.html',
    providers:[LoginService]
})
export class LoginComponent implements OnInit{
    PageTitle: string;
    ipUserName:string;
    ipPassword:string;
    _user:IUser;
    errorMessage: string;
    loading:boolean = false;
    invalidUser:boolean=false;

    constructor(private _loginService: LoginService) {
    }

    login():void{
        this.loading = true;
        this._loginService.getUser(this.ipUserName,this.ipPassword)
                .subscribe(_user => 
                            {
                                this._user = _user;
                                this.PageTitle = this._user.Designation;
                                this.invalidUser=false;
                                this.loading = false;
                            },
                           error => 
                           {
                            this.errorMessage = <any>error;
                            this.loading = false;
                            this.invalidUser=true;
                            }
                        );        
    }

    ngOnInit():void{
    }
}