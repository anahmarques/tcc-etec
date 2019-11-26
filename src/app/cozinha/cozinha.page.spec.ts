import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CozinhaPage } from './cozinha.page';

describe('CozinhaPage', () => {
  let component: CozinhaPage;
  let fixture: ComponentFixture<CozinhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CozinhaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CozinhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
