import {Component, OnInit} from '@angular/core'

@Component({
    selector:'be-payrent',
    templateUrl:'app/payrent/payrent.component.html'
})
export class PayRentComponent implements OnInit{
    ngOnInit():void{

    }

    goback():void{
        window.history.back();
    }
}