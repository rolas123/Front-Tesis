import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Estudiante } from 'src/app/models/Estudiante';
import { Router } from '@angular/router';
import { MatSort, MatDialog, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition, MatSnackBar } from '@angular/material';
import { AcademicoService } from 'src/app/services/academico.service';
import { MsjEliminarEstudianteComponent } from '../../mensaje-confirmacion/msj-eliminar-estudiante/msj-eliminar-estudiante.component';
import { MsjEstudianteEliminadoComponent } from './../../mensaje-confirmacion/msj-estudiante-eliminado/msj-estudiante-eliminado.component';

@Component({
  selector: 'app-usuarios-ac',
  templateUrl: './usuarios-ac.component.html',
  styleUrls: ['./usuarios-ac.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UsuariosAcComponent implements OnInit {

  estudiantes: Estudiante[];
  dataSource = null;
  mensaje: string;

  posicionVertical: MatSnackBarVerticalPosition = 'bottom';
  posicionHorizontal: MatSnackBarHorizontalPosition = 'left';
  tiempoSegundos = 10;

  displayedColumns: string[] = ['matricula', 'nombrecompleto', 'programaeducativo', 'seccion', 'bloque', 'actions'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private servicioAC: AcademicoService, private router: Router, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.realoadEstudiantes();
  }

  editarEstudiante(estudiante: Estudiante) {
    this.router.navigate(['/home-academico/actualizar-inf-estudiante', estudiante.matricula]);
  }

  eliminarEstudiante(estudiante: Estudiante) {
    const dialogRef = this.dialog.open(MsjEliminarEstudianteComponent, {
      width: '380px',
      panelClass: 'msj-registrar-estudiante',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          this.servicioAC.deleteEstudiante(estudiante).subscribe(
            result => {
              if (result) {
                this.estudiantes = this.estudiantes.filter(borrarEstudiante => borrarEstudiante !== estudiante);
                this.realoadEstudiantes();
                this._snackBar.openFromComponent(MsjEstudianteEliminadoComponent, {
                  duration: this.tiempoSegundos * 400,
                  horizontalPosition: this.posicionHorizontal,
                  verticalPosition: this.posicionVertical,
                  panelClass: ['msj-estudiante-eliminado']
                });
              } else {
                this.dialog.closeAll();
              }
            }
          );
        }
      }
    );
  }

  realoadEstudiantes() {
    this.servicioAC.getTodosEstudiantes().subscribe(
      result => {
        this.estudiantes = result;
        this.dataSource = new MatTableDataSource<Estudiante>(this.estudiantes);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  filtrarAlumno(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}