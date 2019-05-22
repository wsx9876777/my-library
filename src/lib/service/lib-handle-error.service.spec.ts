import { TestBed } from '@angular/core/testing';

import { LibHandleErrorService } from './lib-handle-error.service';

describe('LibHandleErrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibHandleErrorService = TestBed.get(LibHandleErrorService);
    expect(service).toBeTruthy();
  });
});
