import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorridaPage } from './corrida.page';

describe('CorridaPage', () => {
  let component: CorridaPage;
  let fixture: ComponentFixture<CorridaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorridaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorridaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
