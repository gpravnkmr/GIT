import { Injectable } from '@angular/core';
import {CookieService, CookieOptionsArgs} from 'angular2-cookie/core';

@Injectable()
export class CookiesService {
    private option: CookieOptionsArgs;

    constructor(private cookieService: CookieService) {
    }

    getCookie(key: string) {
        return this.cookieService.get(key);
    }

    setCookie(key: string, value: string) {
        var expiresDate = new Date();    
        expiresDate.setDate(expiresDate.getDate()+7);
        this.option={expires: expiresDate.toDateString()};
        this.cookieService.put(key, value, this.option);
    }

    deleteCookie(key: string) {
        this.cookieService.remove(key);
    }

    removeAllCookies(){
        this.cookieService.removeAll();
    }
}