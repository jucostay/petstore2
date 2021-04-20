import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MockComponents } from 'ng-mocks';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { Overlay } from '@angular/cdk/overlay';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        ContactComponent,
        MockComponents(
          MatError,
          MatLabel,
          MatFormField
        )
      ],
      providers: [
        FormBuilder,
        MatSnackBar,
        Overlay
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should check email input', () => {
    // tirando a defnição do email
    component.formGroup.patchValue({ 'email': '' });
    fixture.autoDetectChanges();
    // Obtendo a tag mat-error e verficando a mensagem
    let inputEmail = document.getElementsByClassName('email');
    let matError = inputEmail[0].getElementsByTagName('mat-error');
    expect(matError[0].textContent!.trim()).toEqual('O email é obrigatório');

    // Definindo email inválido
    component.formGroup.patchValue({ 'email:': 'julia@costa' });
    fixture.autoDetectChanges();

    inputEmail = document.getElementsByClassName('email');
    matError = inputEmail[0].getElementsByTagName('mat-error');
    expect(matError[1].textContent!.trim()).toEqual('Email inválido')

    // Definindo email válido e verificando se não tem tag mat-error
    component.formGroup.patchValue({ 'email': 'juliacosta@quickfast.com' });
    fixture.autoDetectChanges();

    inputEmail = document.getElementsByClassName('email');
    matError = inputEmail[0].getElementsByTagName('mat-error');
    expect(matError.length).toEqual(0);

  });

  it('should check name input', () => {
    component.formGroup.patchValue({ 'name': '' });
    fixture.autoDetectChanges();
    // verficando a mensagem de 'nome é obrigatório' na tag MatError
    let inputName = document.getElementsByClassName('name');
    let matError = inputName[0].getElementsByTagName('mat-error');
    expect(matError[0].textContent?.trim()).toEqual('O nome é obrigatorio')
  });  

  it('should check phone input', () => {
    component.formGroup.patchValue({ 'phone': '' });
    fixture.autoDetectChanges();
    //verficando a mensagem de 'telefone obrigatório' com a tag MatError
    let inputPhone = document.getElementsByClassName('phone');
    let matError = inputPhone[0].getElementsByTagName('mat-error');
    expect(matError[0].textContent?.trim()).toEqual('Telefone é obrigatório')

    // telefone é válido
    component.formGroup.patchValue({ 'phone': '11953736483' })
    fixture.autoDetectChanges();

    component.formGroup.controls['phone'].valid
    expect(component.formGroup.controls['phone'].valid).toBe(true)

    //telefone é inválido
    component.formGroup.patchValue({ 'phone': '87678ju' })
    fixture.autoDetectChanges();

    component.formGroup.controls['phone'].valid
    expect(component.formGroup.controls['phone'].valid).toBe(false)

  });

  it('should check messages input', () => {
    // verficando a mesangem de 'mensagem é obrigatória'
    component.formGroup.patchValue({ 'message': '' });
    let inputMsg = document.getElementsByClassName('message');
    let matError = inputMsg[0].getElementsByTagName('mat-error');
    expect(matError[0].textContent?.trim()).toEqual('Mensagem é obrigatória');
  });
});
