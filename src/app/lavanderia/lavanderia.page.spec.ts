import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LavanderiaPage } from './lavanderia.page';

describe('LavanderiaPage', () => {
  let component: LavanderiaPage;
  let fixture: ComponentFixture<LavanderiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LavanderiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LavanderiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
