import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitassaudaveisPage } from './receitassaudaveis.page';

describe('ReceitassaudaveisPage', () => {
  let component: ReceitassaudaveisPage;
  let fixture: ComponentFixture<ReceitassaudaveisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitassaudaveisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitassaudaveisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
