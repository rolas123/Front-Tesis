import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterseccionComponent } from './interseccion.component';

describe('InterseccionComponent', () => {
  let component: InterseccionComponent;
  let fixture: ComponentFixture<InterseccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterseccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterseccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
