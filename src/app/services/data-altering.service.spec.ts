import { TestBed } from '@angular/core/testing';

import { DataAlteringService } from './data-altering.service';

describe('DataAlteringService', () => {
  let service: DataAlteringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAlteringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
