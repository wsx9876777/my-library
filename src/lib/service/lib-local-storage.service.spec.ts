import { TestBed } from '@angular/core/testing';

import { LibLocalStorageService } from './lib-local-storage.service';

describe('LibLocalStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibLocalStorageService = TestBed.get(LibLocalStorageService);
    expect(service).toBeTruthy();
  });
});
