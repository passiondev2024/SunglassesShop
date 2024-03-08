import { TestBed } from '@angular/core/testing';

import { SunglassesService } from './sunglasses.service';

describe('SunglassesService', () => {
  let service: SunglassesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SunglassesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
