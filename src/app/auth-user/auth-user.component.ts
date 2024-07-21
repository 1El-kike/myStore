import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-user',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgClass
  ],
  templateUrl: './auth-user.component.html',
  styleUrl: './auth-user.component.css'
})
export class AuthUserComponent {

  alert = 'Market'
  content = 'Thank you for using WepApp, to start log in or sign up'
  description = 'By logging in or registering you agree to our Terms and Conditions'

  //La otra version de formulario
  formularioConct : FormGroup

  constructor(private _form :FormBuilder ){
    this.formularioConct = this._form.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email] ],
      password:['',[Validators.required,Validators.minLength(15)]],
      iphone:['',Validators.required]

    })
  }



enviar =()=>{
  console.log(this.formularioConct)
 }

hasErrors =(controlName:string, errorType :string)=>{
  return this.formularioConct.get(controlName)?.hasError(errorType) && this.formularioConct.get(controlName)?.touched
}


}

  /*
  Formulario reactivo

  public user  : User = {
    name:'',
  email:"",
  password:'',
  iphone:''

  } */


/* interface User {
  name:string,
email:string,
password:string,
iphone:string

} */
