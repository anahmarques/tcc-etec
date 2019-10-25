import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudePage } from './saude.page';

describe('SaudePage', () => {
  let component: SaudePage;
  let fixture: ComponentFixture<SaudePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaudePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaudePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
