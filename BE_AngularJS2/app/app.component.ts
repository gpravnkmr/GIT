import {Component} from '@angular/core'

@Component({
    selector: 'be-app',
    template: `<div>
      <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand' [routerLink]="['/welcome']">Bhawana Enterprises</a>
                <ul class='nav navbar-right'>
                    <li><a [routerLink]="['/login']">Login</a></li>                    
                </ul>
            </div>
        </nav>
    </div>
    <div class='container'>
        <router-outlet></router-outlet>
    </div>`

})
export class AppComponent{

}