import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ILibHandleHttpError } from '../interface/lib-handle-http-error.interface';
import { IMySubjectData } from 'src/app/shared/interface/IMySubject-data';

@Injectable()
export class LibHandleHttpErrorService implements ILibHandleHttpError {
  HandleError(error: any): Observable<any> {
    //console.log(this.sd$)
    return of(error.error);
  }
  constructor(private sd$: IMySubjectData) { }
}
