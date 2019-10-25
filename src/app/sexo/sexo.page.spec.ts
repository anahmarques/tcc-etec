import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SexoPage } from './sexo.page';

describe('SexoPage', () => {
  let component: SexoPage;
  let fixture: ComponentFixture<SexoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SexoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SexoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
