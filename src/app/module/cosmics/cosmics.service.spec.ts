import { TestBed } from '@angular/core/testing';

import { CosmicsService } from './cosmics.service';

describe('CosmicsService', () => {
  let service: CosmicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CosmicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
