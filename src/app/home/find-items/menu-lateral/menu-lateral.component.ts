import { CurrencyPipe, NgIf } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { List, LocalstoreService } from '../../../services/localstore.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [NgIf,CurrencyPipe,ButtonModule,],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent implements OnInit {
  @Input() isOpenMenu?:boolean ;
 total:any = 0
  datosBuy:List[] = []

 private _servisLocalStore = inject(LocalstoreService)


  exitMenu(){
    this.isOpenMenu = false;

  }

  restarList(id:number){
this._servisLocalStore
  }

  eliminarlist=(index :number)=>{
    this._servisLocalStore.eliminarList(index);
    this.datosBuy = this._servisLocalStore.getList()

  }

  ngOnInit(): void {
   /*  this.datosBuy = this._servisLocalStore.getList();
    this.total = this.datosBuy.reduce((acumulador, precioActual )=> {
      return acumulador + precioActual.precio;
    }, 0); // Asegúrate de inicializar el acumulador con 0
 */
    this._servisLocalStore.lista$.subscribe(datosBuy => {
      this.datosBuy = datosBuy;
      this.total = this.datosBuy.reduce((acumulador, precioActual) => {
        return acumulador + precioActual.precio;
      }, 0);
    });
  }
}
