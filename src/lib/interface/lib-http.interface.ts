import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export abstract class ILibHttpApi {
    abstract Api(apiName: string): ILibHttp;
}

export abstract class ILibHttp {
    abstract get(params?): Observable<any>;
    abstract post(data): Observable<any>;
    abstract update(data): Observable<any>;
    abstract delete(id): Observable<any>;
}

