import {Component, Injectable,Input,Output,EventEmitter} from '@angular/core'

@Injectable()
export class SharedService {
  @Output() fire: EventEmitter<any> = new EventEmitter();

   constructor() {
   }

   change(changedValue:boolean) {
     this.fire.emit(changedValue);
   }

   getEmittedValue():EventEmitter<boolean> {
     return this.fire;
   }
}