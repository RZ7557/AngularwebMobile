import { TestBed } from '@angular/core/testing';

import { DatahttpCacheService } from './data-http-cache.service';

describe('DatahttpCacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatahttpCacheService = TestBed.get(DatahttpCacheService);
    expect(service).toBeTruthy();
  });
});
