import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogosmobilePage } from './jogosmobile.page';

describe('JogosmobilePage', () => {
  let component: JogosmobilePage;
  let fixture: ComponentFixture<JogosmobilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogosmobilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogosmobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
