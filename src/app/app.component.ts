import {Component} from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FMath';

  constructor(private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.mostrarSpinner();
  }

  mostrarSpinner() : void{
    this.spinnerService.show();
    setTimeout(() =>{
      this.spinnerService.hide();
    },4000);
  }
}
