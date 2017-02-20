import { Component, OnInit } from '@angular/core'
import { CookiesService } from '../SharedServices/CookiesService'
import { Router } from '@angular/router'
import { HomeService } from './home.service'
import { IMenu } from './Menu'

@Component({
    selector: 'be-home',
    templateUrl: 'app/home/home.component.html',
    providers: [CookiesService
        , HomeService]
})
export class HomeComponent implements OnInit {
    designation: string;
    errorMessage: string;
    MenuOptions: IMenu[];

    constructor(private _CookiesService: CookiesService,
        private _router: Router,
        private _homeService: HomeService) {

    }
    ngOnInit(): void {
        this._homeService.getUser(this._CookiesService.getCookie("BE_UserRole"))
            .subscribe(_menus => {
                this.MenuOptions = _menus;
            },
            error => {
                this.errorMessage = <any>error;
            }
            );
    }
}