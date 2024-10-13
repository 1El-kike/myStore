import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { List, LocalstoreService } from '../../../services/localstore.service';
import { ButtonModule } from 'primeng/button';
import { OrderListModule } from 'primeng/orderlist';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [
    NgIf,
    ButtonModule,
    RouterLink,
    OrderListModule,
    DragDropModule,
    AsyncPipe
   ],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent implements OnInit {
  @Input() isOpenMenu?:boolean ;
 total$?:Observable<number>
  datosBuy:List[] = []


 private _servisLocalStore = inject(LocalstoreService)


  exitMenu(){
    this.isOpenMenu = false;

  }

  /* restarList(id:number){
  this._servisLocalStore
  } */

   eliminarlist=(index :number)=>{
    this._servisLocalStore.eliminarList(index);
    this.datosBuy = this._servisLocalStore.getList();

  }
  addproduct(index:number){
  this._servisLocalStore.addmoreProduct(index);
  this.datosBuy = this._servisLocalStore.getList();
  }
  delitproduct(index: number){
    this._servisLocalStore.delitmoreProduct(index);
    this.datosBuy = this._servisLocalStore.getList();
  }

  ngOnInit(): void {
    this._servisLocalStore.lista$.subscribe(datosBuy => {
      this.datosBuy = datosBuy;
    });
  /*   this.total = this.datosBuy.reduce((acumulador, precioActual) => {
      return acumulador + precioActual.precio;
    }, 0); */
    this.total$ = this._servisLocalStore._totalPrice$
  }
}
