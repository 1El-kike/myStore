import { Component, inject, Input, OnInit } from '@angular/core';
import { LocalstoreService } from '../../services/localstore.service';
import { FormsModule } from '@angular/forms';
import { DatosLocales } from '../../models/localDatos.moduls';

@Component({
  selector: 'app-find-items',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './find-items.component.html',
  styleUrl: './find-items.component.css'
})
export class FindItemsComponent implements OnInit{

  @Input() image?: string = ''
  @Input() title : string = ''

datos = DatosLocales;

  datosnew:string = ''
  elementFind:string = ''
  valor:string[] = ['']

  datosLocales:string[] = []

  private _servisLocalStore = inject(LocalstoreService)

  agregarlist=()=>{
 this._servisLocalStore.agregarList(this.datosnew);
 this.datosnew ='';
 this.datosLocales =  this._servisLocalStore.getList();

  }

  eliminarlist=(index :number)=>{
    this._servisLocalStore.eliminarList(index);
    this.datosLocales = this._servisLocalStore.getList()
  }


  ngOnInit(): void {
    this.datosLocales = this._servisLocalStore.getList();
  }

}
