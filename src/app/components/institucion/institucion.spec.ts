import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Institucion } from './institucion';

describe('Institucion', () => {
  let component: Institucion;
  let fixture: ComponentFixture<Institucion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Institucion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Institucion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
