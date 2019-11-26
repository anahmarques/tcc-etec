import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoPage } from './manutencao.page';

describe('ManutencaoPage', () => {
  let component: ManutencaoPage;
  let fixture: ComponentFixture<ManutencaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManutencaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutencaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
