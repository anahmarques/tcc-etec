import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicaPage } from './musica.page';

describe('MusicaPage', () => {
  let component: MusicaPage;
  let fixture: ComponentFixture<MusicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
