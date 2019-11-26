import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitasrapidasPage } from './receitasrapidas.page';

describe('ReceitasrapidasPage', () => {
  let component: ReceitasrapidasPage;
  let fixture: ComponentFixture<ReceitasrapidasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitasrapidasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitasrapidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
