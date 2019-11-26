import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntretenimentoPage } from './entretenimento.page';

describe('EntretenimentoPage', () => {
  let component: EntretenimentoPage;
  let fixture: ComponentFixture<EntretenimentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntretenimentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntretenimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
