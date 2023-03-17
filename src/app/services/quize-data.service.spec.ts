import { TestBed } from '@angular/core/testing';

import { QuizeDataService } from './quize-data.service';

describe('QuizeDataService', () => {
  let service: QuizeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
