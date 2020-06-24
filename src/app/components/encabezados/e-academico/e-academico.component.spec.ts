import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EAcademicoComponent } from './e-academico.component';

describe('EAcademicoComponent', () => {
  let component: EAcademicoComponent;
  let fixture: ComponentFixture<EAcademicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EAcademicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
