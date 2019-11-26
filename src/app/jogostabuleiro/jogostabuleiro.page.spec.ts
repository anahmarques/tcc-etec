import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogostabuleiroPage } from './jogostabuleiro.page';

describe('JogostabuleiroPage', () => {
  let component: JogostabuleiroPage;
  let fixture: ComponentFixture<JogostabuleiroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogostabuleiroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogostabuleiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
