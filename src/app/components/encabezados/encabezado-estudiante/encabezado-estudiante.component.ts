import { Estudiante } from './../../../models/Estudiante';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MenuComponent } from '../menu/menu.component';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-encabezado-estudiante',
  templateUrl: './encabezado-estudiante.component.html',
  styleUrls: ['./encabezado-estudiante.component.scss']
})
export class EncabezadoEstudianteComponent implements OnInit {
  showFiller = false;
  nombreEstudiante: string;
  @Input() error = false;
  @Input() nombreUsuario = false; // validar para que muestre en acerca de y no truene

  constructor(private dialog: MatDialog, private login: LoginService) { }

  ngOnInit() {
    if (!this.error) {
      this.login.getEstudiante(this.login.getMatriculaToken()).subscribe(
        result => {
          this.nombreEstudiante = result.nombrecompleto;
        }
      );
    }
  }

  abrirMenu() {
    const dialogRef = this.dialog.open(MenuComponent, {
      width: '280px',
      position: { right: '7px', top: '75px' },
      panelClass: 'dialogSesion',
      autoFocus: false
    });
  }
}