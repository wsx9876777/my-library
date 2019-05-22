import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ILibHttp, ILibHttpApi } from '../interface/lib-http.interface';
import { LibHttpUrl } from '../data/my-http-url';
import { catchError } from 'rxjs/operators';
import { ILibHandleHttpError } from '../interface/lib-handle-http-error.interface';
import { IMySubjectData } from 'src/app/shared/interface/IMySubject-data';
import { ILibLocalStorage } from '../interface/lib-local-storage.interface';
import { Router } from '@angular/router';

@Injectable()
export class HttpApi implements ILibHttpApi {
  constructor(
    private http: HttpClient,
    private hhe: ILibHandleHttpError
  ) { }
  Api(apiName: string): ILibHttp {
    let s = new LibHttpService(
      this.http,
      LibHttpUrl.apiUrl,
      apiName,
      this.hhe
    );

    s.setHeader('Content-Type', 'application/json; charset=utf-8');
    return s;
  }
}

export class LibHttpService implements ILibHttp {
  private _header: HttpHeaders;

  constructor(
    private http: HttpClient,
    private apiUrl: string,
    private apiName: string,
    private hhe: ILibHandleHttpError
  ) {
    this._header = new HttpHeaders();
  }

  HandleError(error: any) {
    return this.hhe.HandleError(error);
  }

  setUrl(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  setApi(apiName: string) {
    this.apiName = apiName;
  }

  deleteHeader(key) {
    this._header = this._header.delete(key);
  }

  setHeader(key, value) {
    if (this._header.has(key)) {
      this._header = this._header.set(key, value);
    } else {
      this._header = this._header.append(key, value);
    }
  }

  get(params?): Observable<any> {
    const fullPath = `${this.apiUrl}${this.apiName}`;
    let obj: any = {};
    let httpParams;
    if (params) {
      httpParams = new HttpParams();
      for (let key in params) {
        httpParams = httpParams.append(key, params[key].toString());
      }
      obj.params = httpParams;
    }
    obj.headers = this._header;
    return this.http.get(fullPath, obj).pipe(
      catchError((err) => {
        return this.HandleError(err);
      })
    );
  }
  post(data): Observable<any> {
    const fullPath = `${this.apiUrl}${this.apiName}`;
    return this.http.post(fullPath, data, { headers: this._header }).pipe(
      catchError((err) => {
        return this.HandleError(err);
      })
    );
  }
  update(data): Observable<any> {
    const fullPath = `${this.apiUrl}${this.apiName}`;
    return this.http.put(fullPath, data, { headers: this._header }).pipe(
      catchError(this.HandleError)
    );
  }
  delete(id): Observable<any> {
    if (id) {
      const fullPath = `${this.apiUrl}${this.apiName}/${id}`;
      return this.http.delete(fullPath, { headers: this._header }).pipe(
        catchError(this.HandleError)
      );
    }
  }

}
