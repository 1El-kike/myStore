import {
  Component,
  inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiStoresService } from '../../../services/api-stores.service';
import { SkeletonModule } from 'primeng/skeleton';
import { GlobalConstants } from '../../../utils/global-constants';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-stores',
  standalone: true,
  imports: [RouterLink, NgClass, SkeletonModule],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.css',
})
export class StoresComponent implements OnInit {
  @Input() stores?: any[];
  @Input() isloading: boolean = true;
  newdatos?: any;
  isloadingStores: boolean = true;

  //Datos de la url de la app backend
  url: string = GlobalConstants.appURL;

  private _API = inject(ApiStoresService);

  /*  ngOnChanges(changes: SimpleChanges): void {
    this.isloadingStores = this.isloading;

    if (changes['isloading']) {
      this.isloadingStores = changes['isloading'].currentValue;
    }
  } */

  fullStars = Math.floor(3.2); // Estrellas completas
  hasHalfStar = 4 % 1 >= 0.5; // Verifica si hay media estrella

  ngOnInit(): void {
    if (this.stores == undefined) {
      this._API.getAllStores('stores/customer/').subscribe(
        (data) => {
          this.stores = data;
          this.isloadingStores = false;
        },
        (error) => {
          console.log(error);
          // this.isloadingStores = false;
        }
      );
    } else if (this.stores.length > 0) {
      this.isloadingStores = false;
    }
  }
}
