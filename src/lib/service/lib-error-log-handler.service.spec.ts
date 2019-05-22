import { TestBed } from '@angular/core/testing';

import { LibErrorLogHandlerService } from './lib-error-log-handler.service';

describe('LibErrorLogHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibErrorLogHandlerService = TestBed.get(LibErrorLogHandlerService);
    expect(service).toBeTruthy();
  });
});
