import { Injectable, ErrorHandler } from '@angular/core';
import { ILibHandleError } from '../interface/lib-handle-error.interface';

@Injectable()
export class LibErrorLogHandlerService implements ErrorHandler {
  handleError(error: any): void {
    this._HandleError && this._HandleError.HandleError(error);
  }

  constructor(private _HandleError: ILibHandleError) { }
}
