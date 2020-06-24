import { MatDialog } from '@angular/material';
import { Component, OnInit, Input} from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { LoginService } from './../../../services/login.service';
import { Estudiante } from 'src/app/models/Estudiante';

@Component({
  selector: 'app-e-academico',
  templateUrl: './e-academico.component.html',
  styleUrls: ['./e-academico.component.scss']
})
export class EAcademicoComponent implements OnInit {
  showFiller = false;
  @Input() error = false;
  nombreAcademico: string;

  
  constructor(private dialog: MatDialog, private login: LoginService) { }

  ngOnInit() {
    if (!this.error) {
      this.login.getAcademico(this.login.getNumeropersonalToken()).subscribe(
        result => {
          this.nombreAcademico = result.nombrecompleto;
        }
      );
    }
  }

  abrirMenu(){
    const dialogRef = this.dialog.open(MenuComponent, {
      width: '280px',
      position: { right: '7px', top: '75px' },
      panelClass: 'dialogSesion',
      autoFocus: false
    });
  }

}
