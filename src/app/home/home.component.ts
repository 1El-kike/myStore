import {  Todos } from './../cliente-api.service';
import { Component,  inject,  OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FindItemsComponent } from "./find-items/find-items.component";
import { NgIf } from '@angular/common';
import { LocalstoreService } from '../services/localstore.service';
import { User } from '../models/localDatos.moduls';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    FindItemsComponent,
    NgIf,
    ChipModule,
    AvatarModule,
    BadgeModule
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

 private _localStore = inject(LocalstoreService)

  image: string = '/fondo.jpg';
  todus: Todos[] = [];
  //datos de usuario
  user: any  = null

  ngOnInit(): void {
    this.user = this._localStore.getUser();
    if (this.user.length == 0) {
      this.user = null
    }
  }

}
