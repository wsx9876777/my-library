import { Injectable } from '@angular/core';
import { ILibHandleError } from '../interface/lib-handle-error.interface';
import { Observable, of } from 'rxjs';

@Injectable()
export class LibHandleErrorService implements ILibHandleError {
  HandleError(error: any) {
    for(let key in error){
      //console.log(error[key]);
    }
  }
  
  constructor() { }
}
