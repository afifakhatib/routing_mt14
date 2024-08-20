import { TestBed } from '@angular/core/testing';

import { FairsResolverService } from './fairs-resolver.service';

describe('FairsResolverService', () => {
  let service: FairsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FairsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
