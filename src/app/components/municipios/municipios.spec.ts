import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Municipios } from './municipios';

describe('Municipios', () => {
  let component: Municipios;
  let fixture: ComponentFixture<Municipios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Municipios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Municipios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
