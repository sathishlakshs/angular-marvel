import { TestBed } from '@angular/core/testing';

import { ViewDetailsApiService } from './view-details-api.service';

describe('ViewDetailsApiService', () => {
  let service: ViewDetailsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewDetailsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
