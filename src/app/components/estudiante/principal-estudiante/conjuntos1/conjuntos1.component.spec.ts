import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Conjuntos1Component } from './conjuntos1.component';

describe('Conjuntos1Component', () => {
  let component: Conjuntos1Component;
  let fixture: ComponentFixture<Conjuntos1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Conjuntos1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Conjuntos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
