import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoListarPage } from './contato-listar.page';

describe('ContatoListarPage', () => {
  let component: ContatoListarPage;
  let fixture: ComponentFixture<ContatoListarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoListarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
