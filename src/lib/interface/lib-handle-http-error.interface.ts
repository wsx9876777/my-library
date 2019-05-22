import { Observable } from 'rxjs';
import { IMySubjectData } from 'src/app/shared/interface/IMySubject-data';
import { ILibLocalStorage } from './lib-local-storage.interface';
import { Router } from '@angular/router';

export abstract class ILibHandleHttpError {
    abstract HandleError(error: any): Observable<any>
}
