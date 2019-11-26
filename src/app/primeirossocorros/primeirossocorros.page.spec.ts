import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeirossocorrosPage } from './primeirossocorros.page';

describe('PrimeirossocorrosPage', () => {
  let component: PrimeirossocorrosPage;
  let fixture: ComponentFixture<PrimeirossocorrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeirossocorrosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeirossocorrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
