import { TestBed } from '@angular/core/testing';

import { CosmicsApiService } from './cosmics-api.service';

describe('CosmicsApiService', () => {
  let service: CosmicsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CosmicsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
