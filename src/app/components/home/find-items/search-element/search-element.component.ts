import {
  Component,
  OnChanges,
  Input,
  SimpleChanges,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { CommonModule, NgIf } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { Message } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
@Component({
  selector: 'app-search-element',
  templateUrl: './search-element.component.html',
  styleUrl: './search-element.component.css',
  standalone: true,
  imports: [
    DataViewModule,
    MessagesModule,
    TagModule,
    RatingModule,
    NgIf,
    ButtonModule,
    CommonModule,
    SkeletonModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SearchElementComponent implements OnChanges {
  layout: 'grid' | 'list' = 'list';
  messages: Message[] = [{ severity: 'info', detail: 'Message Content' }];

  // Datos enviados del componente padre de los datos de busquedas
  @Input() searchProduct: any[] = [];
  @Input() input?: string;
  status: string = '';
  //datos que se obtebdran la cambiar el dato del contenedor padre
  valor: any = [];
  //is loading or not
  isLoadingValor: boolean = true;

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes['searchProduct']) {
      this.valor = changes['searchProduct'].currentValue;
      if (this.valor.length > 0) {
        this.isLoadingValor = false;
      }
    }
    if (changes['input']) {
      this.status = changes['input'].currentValue;
    }
  }

  counterArray(n: number): any[] {
    return Array(n);
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
