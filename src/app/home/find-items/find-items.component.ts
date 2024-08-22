import { Component, inject, Input, OnInit } from '@angular/core';
import { List, LocalstoreService } from '../../services/localstore.service';
import { FormsModule } from '@angular/forms';
import { AllElement, allelemnt,  DatosLocales } from '../../models/localDatos.moduls';
import { HomeSecondoryComponent } from '../home-secondory/home-secondory.component';
import { MenuLateralComponent } from "./menu-lateral/menu-lateral.component";
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { SearchElementComponent } from './search-element/search-element.component';
import { ApiHomeService } from '../../services/api-home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-find-items',
  standalone: true,
  imports: [FormsModule, RouterLink,
    HomeSecondoryComponent,TagModule,
    SearchElementComponent,
    NgIf,NgClass,ButtonModule,MenuLateralComponent,
    CarouselModule,ToastModule, ButtonModule, RippleModule],
  providers: [MessageService],
  templateUrl: './find-items.component.html',
  styleUrl: './find-items.component.css'
})
export class FindItemsComponent implements OnInit{

  @Input() image?: string = ''
  @Input() title : string = ''

  //Datos de usuario
   user:string | any = '' ;
  //Datos
  //Lista de productos favoritos
  favoriteProduct?:any;
  //valor del input de busqueda
  searchElement = "";
  //elementos de busquedas inicial
  productsfind:AllElement[] = [];
  //elementos de busqueda resultado
  valorfind :AllElement[] = [];
  //datos carrito de compra
  datosnew?:List;
  elementFind:string = '';
  valor:string[] = [''];
  //abrir menu de compra
  isOpenMenu = false;
  //lista de Productos mas vendidos - Productos favoritos
  datosLocales:List[] = [];
  //datos de los productos que se van agregar a mis favoritos
  listaFavorite :favorite[] = [];
  //datos de la Api de la lista de Productos Nuevos
  datosApi :any[]= [];
  //mensaje de error
  messageError:any =[];
  //Para activae el error
  statusmessage:boolean = false
  //Para buscar los elementos tanto productos como tienda
  filterProducts() {
    this.productsfind = allelemnt;
    let filteredProducts:AllElement[] = [];
    if (this.searchElement.trim().length > 0) {
      filteredProducts = this.productsfind.filter(product =>
        product.name.toLowerCase().includes(this.searchElement.toLowerCase())
      );
    }
    if (filteredProducts.length > 0 || this.searchElement !== "") {
      this.valorfind = filteredProducts;
    }
    else {
      this.valorfind = [];
    }
  }

  getSeverity(status:string) {
    return status === 'In Stock' ? 'success' : 'danger';
  }

  //ajuste de el componente de new Productos
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
  private _API = inject(ApiHomeService)

  //eliminar usuario
  delituser(){
    Promise.all([
      this._servisLocalStore.delitUser(),
      this._servisLocalStore.removeToken()
    ]).then(() => {
      location.reload();
    }).catch((error) => {
      console.error('Error al eliminar usuario y token:', error);
    });
  }

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
    //cambiar estado y color del icono, agregar a la lista de favoritos
    changleproperty(status: boolean, productIndex: number) {
      let product = this.datosApi[productIndex - 1];
      if (this.user == null) {
        console.log("error no tiene cuenta");
        this._messageService.add({ severity: 'error', summary: 'Favorite', detail: 'Your need start autenticate ' });
        return
      }else {
        let data = { id: product.id,status:product.status = !status, icon:product.icon = status ? "pi-heart" : " pi-heart-fill"};
        if (status) {
          console.log("si se envia");
          this.listaFavorite.push(product);
          (this._API.updateNewProduct('newProduct/update',data) as Observable<any>).subscribe(
            (response)=> {
              this.listaFavorite.push(response)
              this.statusmessage = false;
              },
            (error) => {
                this.messageError = error.error.error
                this.statusmessage = true;
            }
          )
        } else {
          (this._API.updateNewProduct('newProduct/update',data) as Observable<any>).subscribe(
            (response)=> {
              this.listaFavorite = this.listaFavorite.filter(item => item.id !== response.id);
              },
            (error) => {
              this.messageError = error.error.error
              }
          )
          this._messageService.add({ severity: 'success', summary: 'Favorite', detail: 'Added purchase of ' + product.name });
          this._servisLocalStore.setFavorite(this.listaFavorite, productIndex);
        }
      }
    }

  toggleMenulateral(){
    this.isOpenMenu = !this.isOpenMenu;
  }

  ngOnInit(): void {
    this.datosLocales = this._servisLocalStore.getList();
    this.user = this._servisLocalStore.getUser();
    if (this.user.length == 0) {
      this.user = null
    }
   this._API.getAllFavoriteProduct('favoriteProduct').subscribe( data => {
    this.favoriteProduct = data
   });
    this._API.getAllnewProduct('newProduct').subscribe(data => {
      this.datosApi = data
    })
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
