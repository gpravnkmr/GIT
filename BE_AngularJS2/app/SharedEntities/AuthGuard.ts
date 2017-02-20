import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { CookiesService } from '../SharedServices/CookiesService'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router
        , private _cookieService: CookiesService) { }

    canActivate() {
        // Check to see if a user has a valid JWT
        if (this.CookiePresent()) {
            // If they do, return true and allow the user to load the home component
            return true;
        }

        // If not, they redirect them to the login page
        this.router.navigate(['/login']);
        return false;
    }

    CookiePresent(): boolean {
        if (this._cookieService.getCookie("BE_UserRole") != undefined) {
            return true;
        }
        else {
            return false;
        }
    }
}