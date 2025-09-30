import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FondoComponent } from '../../fondo/fondo.component';
import { NgClass, NgIf } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ApiAuthServiceService } from '../../services/api.auth.service.service';
import { LocalstoreService } from '../../services/localstore.service';

@Component({
  selector: 'app-auth-user-log-in',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgClass,
    FondoComponent,
    RouterLink,
  ],
  templateUrl: './auth-user-log-in.component.html',
  styleUrl: './auth-user-log-in.component.css',
})
export class AuthUserLogInComponent {
  private _API = inject(ApiAuthServiceService);
  private _localStore = inject(LocalstoreService);

  //dato que se enviaran al backend para verficar
  post_User: any = [];
  //Aqui se guardaran los datos de el usuario una ves se registre
  user: any = [];
  //La otra version de formulario
  formularioConct: FormGroup;
  //error de envio de formulario
  mostrarerror: boolean = false;
  messengererror: string = '';

  // funcion para validar que el campo de iphone es numerico y no contiene letras
  // Validacion personalizada
  numericValidator = (): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const isNumber = /^\d+$/.test(control.value);
      return isNumber ? null : { notNumeric: { value: control.value } };
    };
  };
  //Inicializando Formulario
  constructor(private _form: FormBuilder, private _router: Router) {
    this.formularioConct = this._form.group({
      iphone: ['', [Validators.required, this.numericValidator()]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  enviar = () => {
    if (!this.formularioConct.valid) {
      this.mostrarerror = true;
      this.messengererror = 'Formulario no válido, no se enviarán los datos.';
      return;
    } else {
      this.mostrarerror = false;
    }
    const userData = this.formularioConct.value;
    this._API.logIn('auth/login/customer', userData).subscribe(
      (data) => {
        this._localStore.setToken(data.token);
        this.post_User = data.userclient;
        this._localStore.setUser(this.post_User);
        this.formularioConct.reset();
        this.mostrarerror = false;
        this._router.navigate(['/']);
      },
      (error) => {
        this.messengererror = error.error.message;
        this.mostrarerror = true;
      }
    );
  };

  hasErrors = (controlName: string, errorType: string) => {
    return (
      this.formularioConct.get(controlName)?.hasError(errorType) &&
      this.formularioConct.get(controlName)?.touched
    );
  };
}
