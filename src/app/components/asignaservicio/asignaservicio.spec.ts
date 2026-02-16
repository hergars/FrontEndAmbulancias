import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asignaservicio } from './asignaservicio';

describe('Asignaservicio', () => {
  let component: Asignaservicio;
  let fixture: ComponentFixture<Asignaservicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Asignaservicio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Asignaservicio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
