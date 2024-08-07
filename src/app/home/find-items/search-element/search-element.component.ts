import { Component, OnChanges , Input, SimpleChanges } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-search-element',
    templateUrl: './search-element.component.html',
    standalone: true,
    imports: [
      DataViewModule,
      TagModule,
      RatingModule,
      ButtonModule,
      CommonModule,
    ],
    providers: [],
})
export class SearchElementComponent implements OnChanges {
    layout: string = 'list';

   @Input() searchProduct:any[] | any = [];
    valor: any[] | null= [];

   ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes['searchProduct']) {
      this.valor = changes['searchProduct'].currentValue
      // Aquí puedes agregar lógica adicional para manejar el cambio
      console.log(this.valor)
    }
   }

    ngOnInit() {

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
  };
}


