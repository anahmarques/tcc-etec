import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticosPage } from './domesticos.page';

describe('DomesticosPage', () => {
  let component: DomesticosPage;
  let fixture: ComponentFixture<DomesticosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
