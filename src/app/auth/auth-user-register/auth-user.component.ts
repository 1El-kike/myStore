import { NgClass, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { ApiAuthServiceService } from '../../services/api.auth.service.service';
import { FondoComponent } from '../../fondo/fondo.component';
import { Router, RouterLink } from '@angular/router';
import { LocalstoreService } from '../../services/localstore.service';



@Component({
  selector: 'app-auth-user',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgClass,
    FondoComponent,
    RouterLink

],
  templateUrl: './auth-user.component.html',
  styleUrl: './auth-user.component.css'
})
export class AuthUserComponent {


  private _API = inject(ApiAuthServiceService)
  private _localStore = inject(LocalstoreService)

  alert = 'Market'
  content = 'Thank you for using WepApp, to start log in or sign up'
  description = 'By logging in or registering you agree to our Terms and Conditions'
  //dato que se enviaran al backend para registrar o verficar
  post_User:any = []
  //Aqui se guardaran los datos de el usuario una ves se registre
  user:any = []
  //token de usuario
  token:string= ''
  //La otra version de formulario
  formularioConct : FormGroup
  mostrarerror:boolean = false
  messengererror:string = ''


// funcion para validar que el campo de iphone es numerico y no contiene letras
// Validacion personalizada
   numericValidator = (): ValidatorFn => {
    return (control: AbstractControl):{[key:string]:any} | null => {
      const isNumber = /^\d+$/.test(control.value);
      return isNumber ? null : {'notNumeric':{value:control.value}}
    }
  }

  constructor(private _form :FormBuilder , private _router :Router){
    this.formularioConct = this._form.group({
      name:['',Validators.required],
      iphone:['',[Validators.required,this.numericValidator()]],
      password:['',[Validators.required,Validators.minLength(8)]]

    })
  }



enviar =()=>{
  if (!this.formularioConct.valid) {
    this.mostrarerror = true
    this.messengererror = 'Formulario no válido, no se enviarán los datos.';
    return;
  }else{
    this.mostrarerror = false
  }
  const userData =  this.formularioConct.value;
  this._API.registre('auth/register',userData).subscribe(data =>{
     this.token = data.token;
     this.post_User = data.userclient;
     this._localStore.setUser(this.post_User)
     this.formularioConct.reset();
     this.mostrarerror = false;
    this._router.navigate(['/'])
  },
  error => {
    this.messengererror = error.error.message
    this.mostrarerror = true
  }
)}

hasErrors =(controlName:string, errorType :string)=>{
  return this.formularioConct.get(controlName)?.hasError(errorType) && this.formularioConct.get(controlName)?.touched
}



}
