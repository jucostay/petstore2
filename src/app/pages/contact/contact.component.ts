import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, _SnackBarContainer } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public formGroup!: FormGroup;
  public EMAIL_REGEXP: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public PHONE_REGEXP: RegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.setForDefaultValues();
  }

  setForDefaultValues(){
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.EMAIL_REGEXP)]],
      phone: ['', [Validators.required, Validators.pattern(this.PHONE_REGEXP)]],
      message: ['', [Validators.required]]
    });
  }
  sendForm() {
    if (this.formGroup.valid) {
      //Apresentar mensagem de email enviado com sucesso
      this.formGroup.reset(this.formGroup)
      this._snackBar.open('Formulário aceito e enviado!', '', {
        duration: 2000,
      });
    } else {
          //Apresentar mensagem de erro
      this._snackBar.open('Formulário Invalido, verifique os campos.', '', {
        duration: 2000,
      });
    }
  
      
  }
}
