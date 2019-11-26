import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicaPage } from './magica.page';

describe('MagicaPage', () => {
  let component: MagicaPage;
  let fixture: ComponentFixture<MagicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
