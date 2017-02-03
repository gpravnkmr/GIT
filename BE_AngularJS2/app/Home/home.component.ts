import {Component,OnInit} from '@angular/core'
import {CookiesService} from '../Shared/CookiesService'
import {Router} from '@angular/router'
import {HomeService} from './home.service'
import {IMenu} from './Menu'

@Component({
    selector:'be-home',
    templateUrl:'app/home/home.component.html',
    providers:[CookiesService
                ,HomeService]
})
export class HomeComponent implements OnInit{
designation:string;
errorMessage:string;
MenuOptions: IMenu[];

    constructor(private _CookiesService:CookiesService,
                private _router:Router,
                private _homeService:HomeService){
        
    }
    ngOnInit():void{
        if(this._CookiesService.getCookie("BE_UserRole")){
            this._homeService.getUser(this._CookiesService.getCookie("BE_UserRole"))
            .subscribe(_menus => 
                        {
                            this.MenuOptions=_menus;
                        },
                        error => 
                        {
                            this.errorMessage = <any>error;
                        }
                    );
        }
        else{
            this._router.navigate(["welcome"]);
        }
    }
}