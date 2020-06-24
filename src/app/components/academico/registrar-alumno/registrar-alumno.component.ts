import { LoginService } from 'src/app/services/login.service';
import { MsjEstudianteExisteComponent } from './../../mensaje-confirmacion/msj-estudiante-existe/msj-estudiante-existe.component';
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatDialog, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { MsjResgistrarEstudianteComponent } from './../../mensaje-confirmacion/msj-resgistrar-estudiante/msj-resgistrar-estudiante.component';
import { MsjEstudianteRegistradoComponent } from './../../mensaje-confirmacion/msj-estudiante-registrado/msj-estudiante-registrado.component';
import { Estudiante } from 'src/app/models/Estudiante';
import { AcademicoService } from './../../../services/academico.service';
import { MsjCancelarRegistroComponent } from '../../mensaje-confirmacion/msj-cancelar-registro/msj-cancelar-registro.component';

@Component({
  selector: "app-registrar-alumno",
  templateUrl: "./registrar-alumno.component.html",
  styleUrls: ["./registrar-alumno.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class RegistrarAlumnoComponent implements OnInit {
  alumnoForm: FormGroup;

  posicionVertical: MatSnackBarVerticalPosition = 'bottom';
  posicionHorizontal: MatSnackBarHorizontalPosition = 'left';
  tiempoSegundos = 10;

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar, private router: Router, private servicioAC: AcademicoService) {
    this.alumnoForm = this.createAlumnoForm();
  }

  ngOnInit() { }

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
      numeroPersonal: new FormControl(''),
    });
  }

  guaradarAlumno() {
    if (this.alumnoForm.valid) {
      const dialogRef = this.dialog.open(MsjResgistrarEstudianteComponent, {
        width: '380px',
        panelClass: 'msj-registrar-estudiante',
        autoFocus: false
      });
      dialogRef.afterClosed().subscribe(
        result => {
          if (result) {
            
            let numeroPersonal = this.numeroPersonal();
            console.log(numeroPersonal);
            let x = '123'
            let npp = parseInt(numeroPersonal,10);
            let np;
            console.log('nP: ' + npp);
            //this.alumnoForm.get('rol').setValue('Estudiante');
            this.alumnoForm.get('numeroPersonal').setValue(numeroPersonal);
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
            this.servicioAC.nuevoEstudiante(npp, estudiante).subscribe(
              result => {
                if (result === null) {
                  this._snackBar.openFromComponent(MsjEstudianteExisteComponent, {
                    duration: this.tiempoSegundos * 400,
                    horizontalPosition: this.posicionHorizontal,
                    verticalPosition: this.posicionVertical,
                    panelClass: ['msj-estudiante-existe']
                  });
                }else{
                  this._snackBar.openFromComponent(MsjEstudianteRegistradoComponent, {
                    duration: this.tiempoSegundos * 400,
                    horizontalPosition: this.posicionHorizontal,
                    verticalPosition: this.posicionVertical,
                    panelClass: ['msj-estudiante-registrado']
                  });
  
                  this.router.navigate(['/home-administrador']);
                }
              },
              error => { console.log(error) }
            );
          } else {
            this.dialog.closeAll();
          }
        }
      )
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
    } else {
      this.router.navigate(['/home-administrador']);
    }
  }

  numeroPersonal(): string {
    const cadena = localStorage.getItem('FMathTk');
    const numeropersonal = cadena.substring((cadena.indexOf('&') + 1), cadena.length);
    return numeropersonal;
  }

}