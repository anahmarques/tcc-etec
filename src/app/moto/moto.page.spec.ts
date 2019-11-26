import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoPage } from './moto.page';

describe('MotoPage', () => {
  let component: MotoPage;
  let fixture: ComponentFixture<MotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
