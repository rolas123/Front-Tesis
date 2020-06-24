import { Academico } from './../../../models/Academico';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Estudiante } from 'src/app/models/Estudiante';
import { AcademicoService } from 'src/app/services/academico.service';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { AdministradorService } from './../../../services/administrador.service';
import { MsjEliminarEstudianteComponent } from '../../mensaje-confirmacion/msj-eliminar-estudiante/msj-eliminar-estudiante.component';

@Component({
  selector: 'app-academicos-registrados',
  templateUrl: './academicos-registrados.component.html',
  styleUrls: ['./academicos-registrados.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AcademicosRegistradosComponent implements OnInit {

  listAcademicos: Academico[];
  dataSource = null;
  estatus: boolean;
  estatus2: boolean;

  displayedColumns: string[] = ['numeropersonal', 'nombrecompleto', 'correoinstitucional', 'estatus', 'actions'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private servicioAC: AcademicoService, private router: Router, public dialog: MatDialog, private _snackBar: MatSnackBar,
    private serviceAdmin: AdministradorService) { }

  ngOnInit() {
    this.realoadAcademicos();
  }

  editarAcademico(academico: Academico) {
    this.router.navigate(['/actualizar-informacion-academico', academico.numeropersonal]);
  }

  cambiarEstatus(academico: Academico) {
    const dialogRef = this.dialog.open(MsjEliminarEstudianteComponent, { /// ver color slide toggle
      width: '380px',
      panelClass: 'msj-registrar-estudiante',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          let personal = academico.numeropersonal;
          let usuario = academico.usuario;
          let nombre = academico.nombrecompleto;
          let correo = academico.correoinstitucional;
          let periodo = academico.periodoescolar;
          let contrasena2 = academico.contrasena;
          let rolac = academico.rol;

          let estatusNuevo = this.devolverEstatus(academico);
          if (estatusNuevo == 'Activo') {
            estatusNuevo = 'Inactivo'
          } else {
            estatusNuevo = 'Activo';
          }

          let nuevoAc = new Academico(personal, usuario, nombre, correo, periodo, contrasena2, estatusNuevo, rolac);

          this.serviceAdmin.actualizarAcademico(nuevoAc).subscribe(
            result => {
              this.realoadAcademicos();
              console.log(result)
            }
          );
        } else {
          this.realoadAcademicos();
        }
      }
    );
  }

  realoadAcademicos() {
    this.serviceAdmin.getTodosAcademicos().subscribe(
      result => {
        this.listAcademicos = result;
        this.dataSource = new MatTableDataSource<Academico>(this.listAcademicos);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        for (let i = 0; i < this.listAcademicos.length; i++) {
          if (this.listAcademicos[i].estatus === 'Activo') {
            this.estatus = true;
          }
        }
      }
    );
  }

  filtrarAlumno(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  devolverEstatus(academico: Academico): string {
    return academico.estatus;
  }
}