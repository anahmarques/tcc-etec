import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanheiroPage } from './banheiro.page';

describe('BanheiroPage', () => {
  let component: BanheiroPage;
  let fixture: ComponentFixture<BanheiroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanheiroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanheiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
