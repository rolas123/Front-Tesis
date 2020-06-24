import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiferenciaComponent } from './diferencia.component';

describe('DiferenciaComponent', () => {
  let component: DiferenciaComponent;
  let fixture: ComponentFixture<DiferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
