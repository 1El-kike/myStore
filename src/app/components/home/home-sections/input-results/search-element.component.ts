import {
  Component,
  OnChanges,
  Input,
  SimpleChanges,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  input,
} from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { CommonModule, NgIf } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { Message, MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { CarService } from '../../../services/car-buy.service';
import { ToastModule } from 'primeng/toast';
import { AddToFavoriteService } from '../../../services/add-to-favorite.service';
@Component({
  selector: 'section-search-results',
  templateUrl: './search-element.component.html',
  styleUrl: './search-element.component.css',
  standalone: true,
  imports: [
    DataViewModule,
    MessagesModule,
    TagModule,
    ToastModule,
    RatingModule,
    NgIf,
    ButtonModule,
    CommonModule,
    SkeletonModule,
  ],
  providers: [MessageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SearchElementComponent implements OnChanges {
  layout: 'grid' | 'list' = 'list';
  messages: Message[] = [{ severity: 'info', detail: 'Message Content' }];

  // Datos enviados del componente padre de los datos de busquedas
  @Input() searchProduct: any[] = [];
  @Input() letersend?: string;
  status: string = '';
  //datos que se obtendran al cambiar el dato del contenedor padre
  valor: any = [];
  //is loading or not
  isLoadingValor: boolean = true;

  private _carServuce = inject(CarService);
  private _messageService = inject(MessageService);
  private _addToFavoriteService = inject(AddToFavoriteService);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchProduct']) {
      this.valor = changes['searchProduct'].currentValue;
      if (this.valor.length > 0) {
        this.isLoadingValor = false;
      }
    }
    if (changes['letersend']) {
      this.status = changes['letersend'].currentValue;
    }
  }

  counterArray(n: number): any[] {
    return Array(n);
  }

  //añadir al carrito de compra
  sendbuy(
    id: number,
    name: string,
    price: number,
    num: number,
    img: string,
    tipo: string
  ) {
    this._carServuce.buyCar(
      this._messageService,
      id,
      name,
      price,
      num,
      img,
      tipo
    );
  }
  //añadir a favoritos
  addtofavorite(status: boolean, productIndex: number, datos: any[]) {
    console.log(datos);
    this._addToFavoriteService.addorRemoveToFavorite(
      this._messageService,
      status,
      productIndex,
      datos
    );
  }

  getSeverity(product: any, isopen: any) {
    if (isopen) {
      return isopen == 1 ? 'success' : 'danger';
    }

    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      case 1:
        return 'success';

      case 0:
        return 'danger';

      default:
        return undefined;
    }
  }
}
