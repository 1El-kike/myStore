import { Component, inject, Input, OnInit } from '@angular/core';
import { List, LocalstoreService } from '../../services/localstore.service';
import { FormsModule } from '@angular/forms';
import { DatosLocales } from '../../models/localDatos.moduls';
import { HomeSecondoryComponent } from '../home-secondory/home-secondory.component';
import { MenuLateralComponent } from "./menu-lateral/menu-lateral.component";
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-find-items',
  standalone: true,
  imports: [FormsModule, RouterLink,
    HomeSecondoryComponent,TagModule,
    NgClass,ButtonModule,MenuLateralComponent,
    CarouselModule,ToastModule, ButtonModule, RippleModule],
  providers: [MessageService],
  templateUrl: './find-items.component.html',
  styleUrl: './find-items.component.css'
})
export class FindItemsComponent implements OnInit{

  @Input() image?: string = ''
  @Input() title : string = ''

datos = DatosLocales;

  datosnew?:List
  elementFind:string = '';
  valor:string[] = [''];
  isOpenMenu = false;
  datosLocales:List[] = [];
  products = [
    { id: 0 ,id_product:13,image: '/products/nutella4.jpg', name: 'Nutella', price: 3500, inventoryStatus: 'In Stock', status:false ,cantidad:0, icon: "pi-heart",tipo:"Food" },
    {  id: 1 ,id_product:10,image: '/products/pure_tomate.jpg', name: 'Tomato Pure', price: 900, inventoryStatus: 'Out of Stock' , cantidad:0,status:false, icon: "pi-heart",tipo:"Food" },
    {  id: 2 ,id_product:7,image: '/products/pollo4.jpg', name: 'Meat', price: 3100, inventoryStatus: 'Out of Stock' , status:false, cantidad:0,icon: "pi-heart",tipo:"Food" },
    { id: 3,id_product:6,image: '/products/jamon.jpg', name: 'Ham', price: 2050, inventoryStatus: 'In Stock' , status:false,cantidad:0, icon: "pi-heart",tipo:"Food" },
    {  id: 4 ,id_product:16,image: '/products/jabon.jpg', name: 'Bath Soap', price: 250, inventoryStatus: 'Out of Stock' , status:false,cantidad:0, icon: "pi-heart",tipo:"Food" },
    {  id: 5 ,id_product:3,image: '/products/caldito_pollo2jpg.png', name: 'Chicken broth', price: 500, inventoryStatus: 'Out of Stock' ,cantidad:0, status:false, icon: "pi-heart",tipo:"Food" },


  ];




  getSeverity(status:string) {
    return status === 'In Stock' ? 'success' : 'danger';
  }
  responsiveOptions: CarouselResponsiveOptions[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1
    }
  ];
  private _messageService = inject (MessageService)

  private _servisLocalStore = inject(LocalstoreService)

  //añadir al carrito de compra
  addbuy(id:number,name:string,price:number,num:number,img:string,tipo:string){

    const existingData = this.datosLocales.find(data => data.id === id);
    if (!existingData && (this.datosLocales.length === 0 || !this.datosLocales.some(data => data.id === id))) {
      this.datosnew = {
        id: id,
        name: name,
        precio: price,
        cantidad: num,
        img: img,
        tipo: tipo
      };
      this._servisLocalStore.agregarList(this.datosnew);
      this.datosLocales = this._servisLocalStore.getList();
      this._messageService.add({ severity: 'success', summary: 'Success', detail: 'Added purchase of ' + name });
      }
      else{
      this._messageService.add({ severity: 'warn', summary: 'Warn', detail: `Purchase is of ${name} already added `});

      }

  }
  //eliminar lista de compra de carrito
  eliminarlist=(index :number)=>{
    this._servisLocalStore.eliminarList(index);
    this.datosLocales = this._servisLocalStore.getList()
  }

  // cambiar el icono de heart y guardar en favoritos
  changleproperty(status:boolean, index:number ){
    var data = status
    data = !data
    if (data){
      this.products[index].icon = "pi-heart-fill"
      this.products[index].status = true
    } else{
      this.products[index].icon= "pi-heart"
      this.products[index].status = false

    }
    console.log(this.products[index])
  }



  toggleMenulateral(){
    this.isOpenMenu = !this.isOpenMenu;
  }

  ngOnInit(): void {
    this.datosLocales = this._servisLocalStore.getList();
    console.log(this.datosLocales)
  }

}
