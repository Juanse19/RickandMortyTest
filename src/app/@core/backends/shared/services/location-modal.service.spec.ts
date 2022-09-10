import { TestBed } from '@angular/core/testing';

import { LocationModalService } from './location-modal.service';

describe('LocationModalService', () => {
  let service: LocationModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
