import { TestBed } from '@angular/core/testing';

import { ApiStoresService } from './api-stores.service';

describe('ApiStoresService', () => {
  let service: ApiStoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiStoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
