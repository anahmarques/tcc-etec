import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoscartasPage } from './jogoscartas.page';

describe('JogoscartasPage', () => {
  let component: JogoscartasPage;
  let fixture: ComponentFixture<JogoscartasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogoscartasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoscartasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
