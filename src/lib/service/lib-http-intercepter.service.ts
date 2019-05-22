import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ILibLocalStorage } from '../interface/lib-local-storage.interface';

@Injectable()
export class LibHttpIntercepterService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newRequest;
    let token = this.localStorage.getApiToken();
    if (token) {
      newRequest = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
    } else {
      newRequest = req;
    }

    return next.handle(newRequest);
  }

  constructor(
    private localStorage: ILibLocalStorage
  ) { }
}
