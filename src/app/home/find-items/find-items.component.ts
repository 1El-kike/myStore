import { Component, inject, Input, OnInit } from '@angular/core';
import { List, LocalstoreService } from '../../services/localstore.service';
import { FormsModule } from '@angular/forms';
import { allelemnt, Carrito, DatosLocales, productList, ProductListnew, products } from '../../models/localDatos.moduls';
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
import { SearchElementComponent } from './search-element/search-element.component';

@Component({
  selector: 'app-find-items',
  standalone: true,
  imports: [FormsModule, RouterLink,
    HomeSecondoryComponent,TagModule,
    SearchElementComponent,
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

  searchElement = "";
  productsfind:any[] = [];
  valorfind :any[] | null=[];
  datosnew?:List;
  elementFind:string = '';
  valor:string[] = [''];
  isOpenMenu = false;
  datosLocales:List[] = [];
  products:Carrito[] = products
  listaFavorite :favorite[] = [];

  //Para buscar los elementos tanto productos como tienda
  filterProducts() {
    this.productsfind = allelemnt;
    if (this.searchElement.trim()) {
      this.productsfind = this.productsfind.filter(product =>
     product.name.toLowerCase().includes(this.searchElement.toLowerCase())
     ? this.valorfind = product : null
      );
    } else {
      // Si el término de búsqueda está vacío, muestra todos los productos
      this.valorfind = null // Copia la lista original para evitar referencias mutables
    }
  }

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
      this._messageService.add({ severity: 'success', summary: 'Good', detail: 'Added purchase of ' + name });
      }
      else{
      this._messageService.add({ severity: 'warn', summary: 'Warning', detail: `Purchase is of ${name} already added `});
      }
  }
  //eliminar lista de compra de carrito
  eliminarlist=(index :number)=>{
    this._servisLocalStore.eliminarList(index);
    this.datosLocales = this._servisLocalStore.getList()
  }

    changleproperty(status: boolean, productIndex: number) {
      let product = this.products[productIndex];
      product.icon = status ? "pi-heart" : " pi-heart-fill";

      if (status) {
        this.listaFavorite.push(product);
        product.status = false;
      } else {
        this._messageService.add({ severity: 'success', summary: 'Favorite', detail: 'Added purchase of ' + product.name });
        this.listaFavorite = this.listaFavorite.filter(item => item.id !== product.id);
        product.status = true;
      }
       this._servisLocalStore.setFavorite(this.listaFavorite, productIndex);
    }

  toggleMenulateral(){
    this.isOpenMenu = !this.isOpenMenu;
  }

  ngOnInit(): void {
    this.datosLocales = this._servisLocalStore.getList();
  }

}

export interface favorite {
  id: number;
  id_product: number;
  image: string;
  name: string;
  price: number;
  inventoryStatus: string;
  status: boolean;
  cantidad: number;
  icon: string;
  tipo: string;
}
