import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosAcComponent } from './usuarios-ac.component';

describe('UsuariosAcComponent', () => {
  let component: UsuariosAcComponent;
  let fixture: ComponentFixture<UsuariosAcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariosAcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariosAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
