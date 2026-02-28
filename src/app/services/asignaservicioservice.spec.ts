import { TestBed } from '@angular/core/testing';

import { Asignaservicioservice } from './asignaservicioservice';

describe('Asignaservicioservice', () => {
  let service: Asignaservicioservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Asignaservicioservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
