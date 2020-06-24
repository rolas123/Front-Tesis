import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { MaterialDesignModule } from './models/MaterialDesign.module';
import { EAcademicoComponent } from './components/encabezados/e-academico/e-academico.component';
import { PrincipalComponent } from './components/academico/principal/principal.component';
import { UsuariosAcComponent } from './components/academico/usuarios-ac/usuarios-ac.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorhttpService } from './services/interceptorhttp.service';
import { RegistrarAlumnoComponent } from './components/academico/registrar-alumno/registrar-alumno.component';
import { MsjEstudianteRegistradoComponent } from './components/mensaje-confirmacion/msj-estudiante-registrado/msj-estudiante-registrado.component';
import { MenuComponent } from './components/encabezados/menu/menu.component';
import { MsjCerrarSesionComponent } from './components/encabezados/menu/msj-cerrar-sesion/msj-cerrar-sesion.component';
import { PrincipalAdminComponent } from './components/administrador/principal-admin/principal-admin.component';
import { RegistrarAcademicoComponent } from './components/administrador/registrar-academico/registrar-academico.component';
import { AcademicosComponent } from './components/administrador/academicos/academicos.component';
import { MsjAcademicoRegistradoComponent } from './components/mensaje-confirmacion/msj-academico-registrado/msj-academico-registrado.component';
import { MsjRegistrarAcademicoComponent } from './components/mensaje-confirmacion/msj-registrar-academico/msj-registrar-academico.component';
import { MsjResgistrarEstudianteComponent } from './components/mensaje-confirmacion/msj-resgistrar-estudiante/msj-resgistrar-estudiante.component';
import { AcercaDeComponent } from './components/encabezados/menu/acerca-de/acerca-de.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrincipalEstudianteComponent } from './components/estudiante/principal-estudiante/principal-estudiante.component';
import { UnionComponent } from './components/estudiante/union/union.component';
import { DiferenciaComponent } from './components/estudiante/diferencia/diferencia.component';
import { InterseccionComponent } from './components/estudiante/interseccion/interseccion.component';
import { EncabezadoEstudianteComponent } from './components/encabezados/encabezado-estudiante/encabezado-estudiante.component';
import { Error404Component } from './components/errores/error404/error404.component';
import { PracticarComponent } from './components/estudiante/practicar/practicar.component';
import { Conjuntos1Component } from './components/estudiante/principal-estudiante/conjuntos1/conjuntos1.component';
import { Conjuntos2Component } from './components/estudiante/principal-estudiante/conjuntos2/conjuntos2.component';
import { Error401Component } from './components/errores/error401/error401.component';
import { MsjCancelarRegistroComponent } from './components/mensaje-confirmacion/msj-cancelar-registro/msj-cancelar-registro.component';
import { EditarAlumnoComponent } from './components/academico/editar-alumno/editar-alumno.component';
import { MsjEstudianteExisteComponent } from './components/mensaje-confirmacion/msj-estudiante-existe/msj-estudiante-existe.component';
import { MsjEliminarEstudianteComponent } from './components/mensaje-confirmacion/msj-eliminar-estudiante/msj-eliminar-estudiante.component';
import { MsjEstudianteEliminadoComponent } from './components/mensaje-confirmacion/msj-estudiante-eliminado/msj-estudiante-eliminado.component';
import { MsjEstudianteActualizadoComponent } from './components/mensaje-confirmacion/msj-estudiante-actualizado/msj-estudiante-actualizado.component';
import { MsjActualizarDatosComponent } from './components/mensaje-confirmacion/msj-actualizar-datos/msj-actualizar-datos.component';
import { MsjExisteAcademicoComponent } from './components/mensaje-confirmacion/msj-existe-academico/msj-existe-academico.component';
import { AcademicosRegistradosComponent } from './components/administrador/academicos-registrados/academicos-registrados.component';
import { EditarAcademicoComponent } from './components/administrador/editar-academico/editar-academico.component';
import { IntroduccionConjuntosComponent } from './components/estudiante/principal-estudiante/introduccion-conjuntos/introduccion-conjuntos.component';



@NgModule({
  declarations: [
    AppComponent, LoginComponent, EAcademicoComponent, PrincipalComponent, UsuariosAcComponent,RegistrarAlumnoComponent, 
    MsjEstudianteRegistradoComponent,MenuComponent, MsjCerrarSesionComponent, PrincipalAdminComponent, 
    RegistrarAcademicoComponent,AcademicosComponent, MsjAcademicoRegistradoComponent, MsjRegistrarAcademicoComponent, 
    MsjResgistrarEstudianteComponent, AcercaDeComponent, FooterComponent, PrincipalEstudianteComponent, UnionComponent, 
    DiferenciaComponent, InterseccionComponent, EncabezadoEstudianteComponent, Error404Component, PracticarComponent, 
    Conjuntos1Component, Conjuntos2Component, Error401Component, MsjCancelarRegistroComponent, EditarAlumnoComponent, 
    MsjEstudianteExisteComponent, MsjEliminarEstudianteComponent, MsjEstudianteEliminadoComponent, MsjEstudianteActualizadoComponent, 
    MsjActualizarDatosComponent, MsjExisteAcademicoComponent, AcademicosRegistradosComponent, EditarAcademicoComponent, IntroduccionConjuntosComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialDesignModule, HttpClientModule,ReactiveFormsModule, FormsModule, 
    NgxSpinnerModule, FlexLayoutModule 
  ],
  entryComponents: [
    MsjResgistrarEstudianteComponent, MsjEstudianteRegistradoComponent, MenuComponent, MsjCerrarSesionComponent,
    MsjRegistrarAcademicoComponent, MsjAcademicoRegistradoComponent, MsjCancelarRegistroComponent, MsjEstudianteExisteComponent,
    MsjEliminarEstudianteComponent, MsjEstudianteEliminadoComponent, MsjEstudianteActualizadoComponent, MsjActualizarDatosComponent,
    MsjExisteAcademicoComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorhttpService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }