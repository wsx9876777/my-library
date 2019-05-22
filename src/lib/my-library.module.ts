import { NgModule, ErrorHandler } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LibHttpIntercepterService } from './service/lib-http-intercepter.service';
import { LibErrorLogHandlerService } from './service/lib-error-log-handler.service';
import { LibLocalStorageService } from './service/lib-local-storage.service';
import { HttpApi } from './service/lib-http.service';

import { ILibHttpApi } from './interface/lib-http.interface';
import { ILibLocalStorage } from './interface/lib-local-storage.interface';
import { ILibHandleError } from './interface/lib-handle-error.interface';
import { LibHandleErrorService } from './service/lib-handle-error.service';
import { ILibHandleHttpError } from '../public-api';
import { LibHandleHttpErrorService } from './service/lib-handle-http-error.service';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LibHttpIntercepterService,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: LibErrorLogHandlerService
    },
    {
      provide: ILibHttpApi,
      useClass: HttpApi
    },
    {
      provide: ILibLocalStorage,
      useClass: LibLocalStorageService
    },
    {
      provide: ILibHandleError,
      useClass: LibHandleErrorService
    },
    {
      provide: ILibHandleHttpError,
      useClass: LibHandleHttpErrorService
    }

    
  ]
})
export class MyLibraryModule { }
