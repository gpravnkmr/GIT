import { Component } from '@angular/core'
import {Router} from '@angular/router'

@Component({

})
export class ProfileComponent {
    constructor(private router:Router){

    }
    goback(): void {
        this.router.navigate(["home"]);
    }
}