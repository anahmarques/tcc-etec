import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogospcPage } from './jogospc.page';

describe('JogospcPage', () => {
  let component: JogospcPage;
  let fixture: ComponentFixture<JogospcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogospcPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogospcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
