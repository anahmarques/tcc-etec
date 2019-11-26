import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SertanejoPage } from './sertanejo.page';

describe('SertanejoPage', () => {
  let component: SertanejoPage;
  let fixture: ComponentFixture<SertanejoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SertanejoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SertanejoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
