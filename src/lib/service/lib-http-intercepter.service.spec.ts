import { TestBed } from '@angular/core/testing';

import { LibHttpIntercepterService } from './lib-http-intercepter.service';

describe('LibHttpIntercepterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibHttpIntercepterService = TestBed.get(LibHttpIntercepterService);
    expect(service).toBeTruthy();
  });
});
