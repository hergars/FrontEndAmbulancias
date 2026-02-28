import { TestBed } from '@angular/core/testing';

import { Institucionservice } from './institucionservice';

describe('Institucionservice', () => {
  let service: Institucionservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Institucionservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
