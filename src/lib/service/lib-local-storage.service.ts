import { Injectable } from '@angular/core';
import { ILibLocalStorage } from '../../public-api';

@Injectable()
export class LibLocalStorageService implements ILibLocalStorage {

  private storageKey: string = "marketKey";


  getApiToken(): string {
    let info = localStorage.getItem(this.storageKey);
    return info;
  }

  setApiToken(token): void {
    localStorage.setItem(this.storageKey, token);
  }

  clearApiToken(): void {
    localStorage.removeItem(this.storageKey);
  }

  constructor() { }
}
