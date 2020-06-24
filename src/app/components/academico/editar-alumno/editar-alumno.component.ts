import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatDialog, MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { AcademicoService } from 'src/app/services/academico.service';
import { LoginService } from 'src/app/services/login.service';
import { Estudiante } from 'src/app/models/Estudiante';
import { MsjEstudianteActualizadoComponent } from '../../mensaje-confirmacion/msj-estudiante-actualizado/msj-estudiante-actualizado.component';
import { MsjActualizarDatosComponent } from '../../mensaje-confirmacion/msj-actualizar-datos/msj-actualizar-datos.component';
import { MsjCancelarRegistroComponent } from '../../mensaje-confirmacion/msj-cancelar-registro/msj-cancelar-registro.component';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EditarAlumnoComponent implements OnInit {
  alumnoForm: FormGroup;

  posicionHorizontal: MatSnackBarHorizontalPosition = 'left';
  posicionVertical: MatSnackBarVerticalPosition = 'bottom';
  tiempoSegundos = 10;

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar, private router: Router, private servicioAC: AcademicoService,
    private login: LoginService, private route: ActivatedRoute) {
    this.alumnoForm = this.createAlumnoForm();
  }

  ngOnInit() {
    let matricula = this.route.snapshot.params['id'];
    this.login.getEstudiante(matricula).subscribe(
      result => {
        this.alumnoForm.get('nombre').setValue(result.nombrecompleto);
        this.alumnoForm.get('matricula').setValue(result.matricula);
        this.alumnoForm.get('correoInstitucional').setValue(result.correoinstitucional);
        this.alumnoForm.get('contrasena').setValue(result.contrasena);
        this.alumnoForm.get('programaEducativo').setValue(result.programaeducativo);
        this.alumnoForm.get('seccion').setValue(result.seccion);
        this.alumnoForm.get('bloque').setValue(result.bloque);
      }
    );
  }

  createAlumnoForm() {
    return new FormGroup({
      matricula: new FormControl('', [Validators.required, Validators.minLength(10)]),
      nombre: new FormControl('', Validators.required),
      correoInstitucional: new FormControl('', [Validators.required, Validators.email]),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(6)]),
      programaEducativo: new FormControl('', Validators.required),
      seccion: new FormControl('', Validators.required),
      bloque: new FormControl('', Validators.required),
      rol: new FormControl(''),
    });
  }

  actualizarAlumno() {
    if (this.alumnoForm.valid) {
      const dialogRef = this.dialog.open(MsjActualizarDatosComponent, {
        width: '380px',
        panelClass: 'msj-registrar-estudiante',
        autoFocus: false
      });

      dialogRef.afterClosed().subscribe(
        result => {
          if (result) {
          
            this.alumnoForm.get('rol').setValue('Estudiante');
            let estudiante: Estudiante = new Estudiante(
              this.alumnoForm.get('matricula').value,
              this.alumnoForm.get('nombre').value,
              this.alumnoForm.get('correoInstitucional').value,
              this.alumnoForm.get('contrasena').value,
              this.alumnoForm.get('programaEducativo').value,
              this.alumnoForm.get('seccion').value,
              this.alumnoForm.get('bloque').value,
              this.alumnoForm.get('rol').value
            );
            this.servicioAC.actualizarEstudiante(estudiante).subscribe(
              result => {
                if (result) {
                  this._snackBar.openFromComponent(MsjEstudianteActualizadoComponent, {
                    duration: this.tiempoSegundos * 400,
                    horizontalPosition: this.posicionHorizontal,
                    verticalPosition: this.posicionVertical,
                    panelClass: ['msj-estudiante-actualizado']
                  });

                  this.router.navigate(['/home-administrador']);
                }
              },
              error => console.log('Error: ', error)
            );
          }
        }
      );
    }
  }

  cancelar() {
    if (this.alumnoForm.get('matricula').value !== undefined && this.alumnoForm.get('matricula').value !== '' ||
      this.alumnoForm.get('nombre').value !== undefined && this.alumnoForm.get('nombre').value !== '' ||
      this.alumnoForm.get('contrasena').value !== undefined && this.alumnoForm.get('contrasena').value !== '' ||
      this.alumnoForm.get('programaEducativo').value !== undefined && this.alumnoForm.get('programaEducativo').value !== '' ||
      this.alumnoForm.get('seccion').value !== undefined && this.alumnoForm.get('seccion').value !== '') {
      const dialogRef = this.dialog.open(MsjCancelarRegistroComponent, {
        width: '380px',
        panelClass: 'msj-registrar-estudiante',
        autoFocus: false
      });
    }else{
      this.router.navigate(['/home-administrador']);
    }
  }
}