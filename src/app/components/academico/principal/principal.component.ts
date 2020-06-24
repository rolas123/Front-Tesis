import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PrincipalComponent implements OnInit {

  constructor(private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner();
  }

  
  spinner() : void{
    this.spinnerService.show();
    setTimeout(() =>{
      this.spinnerService.hide();
    },2500);
  }

}
