import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicosComponent } from './academicos.component';

describe('AcademicosComponent', () => {
  let component: AcademicosComponent;
  let fixture: ComponentFixture<AcademicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
