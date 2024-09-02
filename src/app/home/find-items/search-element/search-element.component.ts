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
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { Message } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
@Component({
  selector: 'app-search-element',
  templateUrl: './search-element.component.html',
  standalone: true,
  imports: [
    DataViewModule,
    MessagesModule,
    TagModule,
    RatingModule,
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

  @Input() searchProduct: any[] = [];
  @Input() input?: string;
  valor: any[] = [];
  status = '';
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes['searchProduct']) {
      this.valor = changes['searchProduct'].currentValue;
      // Aquí puedes agregar lógica adicional para manejar el cambio
    }
    if (changes['input']) {
      this.status = changes['input'].currentValue;
    }
  }

  counterArray(n: number): any[] {
    return Array(n);
  }

  getSeverity(product: any) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return undefined;
    }
  }
}
