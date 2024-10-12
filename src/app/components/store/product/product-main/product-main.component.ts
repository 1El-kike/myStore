import { Component, inject, signal, WritableSignal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiStoresService } from '../../../services/api-stores.service';
import { AsyncPipe, CurrencyPipe, NgClass } from '@angular/common';
import { typeproducts } from './product-main.models';
import { CarService } from '../../../services/car-buy.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-product-main',
  standalone: true,
  imports: [AsyncPipe, ToastModule,CurrencyPipe, NgClass],
  templateUrl: './product-main.component.html',
  styleUrl: './product-main.component.css',
  providers: [MessageService],
 // providers: [AddbuyService],

})
export class ProductMainComponent {
  //datos de products
  products$?: Observable<any>;
  //tipos de calificacion de products
  typeproduct: any;

  typecategory: any;
  //para obtener el item de la categoria actual
  number: number = 0;

  private _API = inject(ApiStoresService);
  private _carServuce = inject(CarService);
  private _messageService = inject(MessageService)

  cancelfind(item: number) {
    event?.stopPropagation();
    this.products$ = this._API.getAllproducts('allProducts');
    this.typecategory[item].activate = false;
  }
//cambiar de categorty products
  changeproduct(item: number) {
    this.typecategory = this.typeproduct[item].category;
    this.number = item;
  }

//añadir al carrito de compra
  sendbuy(id:number,name:string,price:number,num:number,img:string,tipo:string){
    this._carServuce.buyCar(this._messageService,id,name,price,num,img,tipo)
  }

  changecategory(text: string, item: number) {
    this.typeproduct.map((e: any) => {
      e.category.map((e: any) => {
        if (e.activate == true && e.name != text) {
          e.activate = false;
        }
      });
    });
    this.typecategory[item].activate = true;

    this.products$ = this._API.getAllproducts('allProducts');
    this.products$
      ?.pipe(
        map((datanew) => {
          let result: any = [];
          datanew.map((data: any) => {
            let textArray: string = data.category;
            let text1 = textArray.toLowerCase() + 's';
            let text2 = text.toLowerCase();

            if (text1.includes(text2)) {
              result.push(data);
            }
          });
          return result;
        })
      )
      .subscribe(
        (datos: any) =>
          (this.products$ = new Observable((valor) => {
            valor.next(datos);
          })),
        (err) => console.log(err)
      );
  }

  ngOnInit(): void {
    this.products$ = this._API.getAllproducts('allProducts');
    this.typeproduct = typeproducts;
    this.typecategory = this.typeproduct[0].category;
    //typeproduct[0].category
  }
}
