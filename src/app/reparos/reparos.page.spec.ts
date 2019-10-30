import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparosPage } from './reparos.page';

describe('ReparosPage', () => {
  let component: ReparosPage;
  let fixture: ComponentFixture<ReparosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReparosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReparosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
