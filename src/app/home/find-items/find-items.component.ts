import { Component, inject, Input, OnInit } from '@angular/core';
import { LocalstoreService } from '../../services/localstore.service';
import { FormsModule } from '@angular/forms';
import { DatosLocales } from '../../models/localDatos.moduls';
import { HomeSecondoryComponent } from '../home-secondory/home-secondory.component';
import { MenuLateralComponent } from "./menu-lateral/menu-lateral.component";
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-find-items',
  standalone: true,
  imports: [FormsModule, RouterLink,
    HomeSecondoryComponent,TagModule,
    NgClass,ButtonModule,MenuLateralComponent,
    CarouselModule],
  templateUrl: './find-items.component.html',
  styleUrl: './find-items.component.css'
})
export class FindItemsComponent implements OnInit{

  @Input() image?: string = ''
  @Input() title : string = ''

datos = DatosLocales;

  datosnew:string = '';
  elementFind:string = '';
  valor:string[] = [''];
  isOpenMenu = false;
  datosLocales:string[] = [];
  products = [
    { id:0,image: '/products/nutella4.jpg', name: 'Nutella', price: 3500, inventoryStatus: 'In Stock', status:false , icon: "pi-heart" },
    { id:1,image: '/products/pure_tomate.jpg', name: 'Tomato Pure', price: 900, inventoryStatus: 'Out of Stock' , status:false, icon: "pi-heart" },
    { id:2,image: '/products/pollo4.jpg', name: 'Meat', price: 3100, inventoryStatus: 'Out of Stock' , status:false, icon: "pi-heart"},
    { id:3,image: '/products/jamon.jpg', name: 'Ham', price: 2050, inventoryStatus: 'In Stock' , status:false, icon: "pi-heart"},
    { id:4,image: '/products/jabon.jpg', name: 'Bath Soap', price: 250, inventoryStatus: 'Out of Stock' , status:false, icon: "pi-heart"},
    { id:5,image: '/products/caldito_pollo2jpg.png', name: 'Producto 2', price: 500, inventoryStatus: 'Out of Stock' , status:false, icon: "pi-heart"},

    // más productos aquí
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

  toggleMenulateral(){
    this.isOpenMenu = !this.isOpenMenu;
  }

  ngOnInit(): void {
    this.datosLocales = this._servisLocalStore.getList();
  }

}
