import { TestBed } from '@angular/core/testing';

import { RouterGuardServiceService } from './router-guard-service.service';

describe('RouterGuardServiceService', () => {
  let service: RouterGuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterGuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
