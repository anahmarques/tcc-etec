import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagodePage } from './pagode.page';

describe('PagodePage', () => {
  let component: PagodePage;
  let fixture: ComponentFixture<PagodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
