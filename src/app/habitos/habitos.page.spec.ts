import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitosPage } from './habitos.page';

describe('HabitosPage', () => {
  let component: HabitosPage;
  let fixture: ComponentFixture<HabitosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabitosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
