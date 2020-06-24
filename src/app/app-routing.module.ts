import { EditarAlumnoComponent } from './components/academico/editar-alumno/editar-alumno.component';
import { GuardiaEstudianteService } from './services/guardias/guardia-estudiante.service';
import { Error404Component } from './components/errores/error404/error404.component';
import { InterseccionComponent } from './components/estudiante/interseccion/interseccion.component';
import { DiferenciaComponent } from './components/estudiante/diferencia/diferencia.component';
import { UnionComponent } from './components/estudiante/union/union.component';
import { PrincipalEstudianteComponent } from './components/estudiante/principal-estudiante/principal-estudiante.component';
import { AcercaDeComponent } from './components/encabezados/menu/acerca-de/acerca-de.component';
import { RegistrarAcademicoComponent } from './components/administrador/registrar-academico/registrar-academico.component';
import { PrincipalAdminComponent } from './components/administrador/principal-admin/principal-admin.component';
import { RegistrarAlumnoComponent } from './components/academico/registrar-alumno/registrar-alumno.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/academico/principal/principal.component';
import { AcademicosComponent } from './components/administrador/academicos/academicos.component';
import { PracticarComponent } from './components/estudiante/practicar/practicar.component';
import { Error401Component } from './components/errores/error401/error401.component';
import { GuardiaAcademicoService } from './services/guardias/guardia-academico.service';
import { EditarAcademicoComponent } from './components/administrador/editar-academico/editar-academico.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home-academico', component: PrincipalComponent, canActivate: [GuardiaAcademicoService]},
  { path: 'home-academico/actualizar-inf-estudiante/:id', component: EditarAlumnoComponent, canActivate: [GuardiaAcademicoService]},
  { path: 'home-estudiante', component: PrincipalEstudianteComponent, canActivate: [GuardiaEstudianteService]},
  { path: 'home-estudiante/practicar', component: PracticarComponent, canActivate: [GuardiaEstudianteService]},
  { path: 'home-estudiante/union', component: UnionComponent, canActivate: [GuardiaEstudianteService]},
  { path: 'home-estudiante/diferencia', component: DiferenciaComponent, canActivate: [GuardiaEstudianteService]},
  { path: 'home-estudiante/interseccion', component: InterseccionComponent, canActivate: [GuardiaEstudianteService]},
  { path: 'registrar-estudiante', component: RegistrarAlumnoComponent},
  { path: 'home-administrador', component: PrincipalAdminComponent },
  { path: 'registrar-academico', component: RegistrarAcademicoComponent },
  { path: 'academicos-registrados', component: AcademicosComponent },
  { path: 'actualizar-informacion-academico/:id', component: EditarAcademicoComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: '401', component: Error401Component },
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
