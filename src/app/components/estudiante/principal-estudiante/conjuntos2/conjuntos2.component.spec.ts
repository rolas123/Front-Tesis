import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Conjuntos2Component } from './conjuntos2.component';

describe('Conjuntos2Component', () => {
  let component: Conjuntos2Component;
  let fixture: ComponentFixture<Conjuntos2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Conjuntos2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Conjuntos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
