import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [
    DataViewModule,
    TagModule,
    RatingModule,
    ButtonModule,
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css',
})
export class FavoriteComponent implements OnChanges {
  @Input() productFavorite: any = [];
  newdata: any = [];
  layout: 'list' | 'grid' = 'list';

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

  ngOnChanges(changes: SimpleChanges): void {
    this.newdata = this.productFavorite;

    if (changes['productFavorite']) {
      this.newdata = changes['productFavorite'].currentValue;
    }
  }
}
