import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  mensajeSesion: string;
  ocultarContrasena = true;


  constructor(private router: Router, private spinnerService: NgxSpinnerService, private loginServicio: LoginService) { }

  getErrorMessageUser() {
    return this.usuario.hasError('required') ? 'Falta colocar el usuario' : '';
  }

  getErrorMessagePass() {
    return this.password.hasError('required') ? 'Falta colocar la contraseña' : '';
  }

  ngOnInit() {
  }

  iniciarSesion() {
    if (this.usuario.value !== undefined && this.usuario.value !== '') {
      if (this.password.value !== undefined && this.password.value !== '') {
        const usuario = this.usuario.value;
        if (usuario.charAt(0) === 'z') {
          this.loginServicio.getAccesoEstudiante(this.usuario.value, this.password.value).subscribe(
            result => {
              if (result.token == 'Sin Token' && result.rol == 'Sin Rol') {
                this.mensajeSesion = 'Usuario y/o constraseña no válidos.';
              } else if (result.rol == 'Estudiante') {
                localStorage.setItem('FMathTk', 'e' + result.token + '&' + result.matricula);
                this.router.navigate(['/home-estudiante']);
              }
            }
          );
        }else if(usuario.charAt(0) !== 'z'){
          this.loginServicio.getAccesoAcademico(this.usuario.value, this.password.value).subscribe(
            result =>{
              if(result.token == 'Sin Token' && result.rol == 'Sin Rol'){
                this.mensajeSesion = 'Usuario y/o constraseña no válidos.';
              }else{
                localStorage.setItem('FMathTk', 'a' + result.token + '&' + result.numeropersonal);
              this.router.navigate(['/home-administrador']);
              }
            }
          );
        }
      }
    }
  }
}
