import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarExamenPage } from './realizar-examen.page';

describe('RealizarExamenPage', () => {
  let component: RealizarExamenPage;
  let fixture: ComponentFixture<RealizarExamenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealizarExamenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizarExamenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
