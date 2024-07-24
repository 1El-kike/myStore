import { Component, inject, Input, OnInit } from '@angular/core';
import { LocalstoreService } from '../../services/localstore.service';
import { FormsModule } from '@angular/forms';
import { DatosLocales } from '../../models/localDatos.moduls';
import { HomeSecondoryComponent } from '../home-secondory/home-secondory.component';
import { MenuLateralComponent } from "./menu-lateral/menu-lateral.component";
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
@Component({
  selector: 'app-find-items',
  standalone: true,
  imports: [FormsModule, HomeSecondoryComponent,TagModule,ButtonModule,MenuLateralComponent,CarouselModule],
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
    { image: '/products/aceite.jpg', name: 'Producto 1', price: 100, inventoryStatus: 'In Stock' },
    { image: '/products/aceite.jpg', name: 'Producto 2', price: 200, inventoryStatus: 'Out of Stock' },
    { image: '/products/aceite.jpg', name: 'Producto 2', price: 200, inventoryStatus: 'Out of Stock' },
    { image: '/products/aceite.jpg', name: 'Producto 2', price: 200, inventoryStatus: 'Out of Stock' },
    { image: '/products/aceite.jpg', name: 'Producto 2', price: 200, inventoryStatus: 'Out of Stock' },
    { image: '/products/aceite.jpg', name: 'Producto 2', price: 200, inventoryStatus: 'Out of Stock' },

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
