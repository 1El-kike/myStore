import { Todos } from '../../../cliente-api.service';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeSectionsComponent } from '../home-sections/sections-component/home-sections.component';
import { NgIf } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { AvatarComponent } from '../../../layout/avatar/avatar.component';
import { HomeHeaderComponent } from "../home-header/home-header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    AvatarComponent,
    AvatarModule,
    BadgeModule,
    HomeHeaderComponent,
    HomeSectionsComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent  {
  //imagen de fondo de header
  imageheader: string = '/fondo.jpg';
  //imagen opacada de fondo
  imagebackground: string = '/fondo.jpg';


}
