import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DancaPage } from './danca.page';

describe('DancaPage', () => {
  let component: DancaPage;
  let fixture: ComponentFixture<DancaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DancaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DancaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
