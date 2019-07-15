import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaPage } from './tema.page';

describe('TemaPage', () => {
  let component: TemaPage;
  let fixture: ComponentFixture<TemaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
