import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaPage } from './tecnologia.page';

describe('TecnologiaPage', () => {
  let component: TecnologiaPage;
  let fixture: ComponentFixture<TecnologiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnologiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnologiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
