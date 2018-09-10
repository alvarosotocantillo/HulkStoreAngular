import { TestBed, inject } from '@angular/core/testing';

import { HulkService } from './hulk.service';

describe('HulkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HulkService]
    });
  });

  it('should be created', inject([HulkService], (service: HulkService) => {
    expect(service).toBeTruthy();
  }));
});
