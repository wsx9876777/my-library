import { TestBed } from '@angular/core/testing';

import { LibHandleHttpErrorService } from './lib-handle-http-error.service';

describe('LibHandleHttpErrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibHandleHttpErrorService = TestBed.get(LibHandleHttpErrorService);
    expect(service).toBeTruthy();
  });
});
