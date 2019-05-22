import { TestBed } from '@angular/core/testing';

import { LibHttpService } from './lib-http.service';

describe('LibHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibHttpService = TestBed.get(LibHttpService);
    expect(service).toBeTruthy();
  });
});
