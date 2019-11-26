import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocesPage } from './doces.page';

describe('DocesPage', () => {
  let component: DocesPage;
  let fixture: ComponentFixture<DocesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
