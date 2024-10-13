import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild, viewChild } from '@angular/core';
import { LocalstoreService } from '../../components/services/localstore.service';
import { MenuLateralComponent } from '../../components/home/home-sections/menu-lateral/menu-lateral.component';
import { AvatarComponent } from "../avatar/avatar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [MenuLateralComponent, AvatarComponent,RouterLink],
  templateUrl: './session.component.html',
  styleUrl: './session.component.css'
})
export class SessionComponent implements  OnInit/* , AfterViewInit */ {


  //abrir menu de compra
  isOpenMenu = false;
  //Datos de usuario
  user: string | any = '';


  private _servisLocalStore = inject(LocalstoreService);


 //eliminar usuario
 delituser() {
  Promise.all([
    this._servisLocalStore.delitUser(),
    this._servisLocalStore.removeToken(),
  ])
    .then(() => {
      location.reload();
    })
    .catch((error) => {
      console.error('Error al eliminar usuario y token:', error);
    });
}

toggleMenulateral() {
  this.isOpenMenu = !this.isOpenMenu;
}

  ngOnInit(): void {

    this.user = this._servisLocalStore.getUser();
    if (this.user.length == 0) {
      this.user = null;
    }
  }
}
