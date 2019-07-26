import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesPage } from './docentes.page';

describe('DocentesPage', () => {
  let component: DocentesPage;
  let fixture: ComponentFixture<DocentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocentesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
