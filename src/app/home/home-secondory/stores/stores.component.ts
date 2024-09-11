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

@Component({
  selector: 'app-stores',
  standalone: true,
  imports: [RouterLink, SkeletonModule],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.css',
})
export class StoresComponent implements OnInit {
  @Input() stores?: any[];
  @Input() isloading: boolean = true;
  newdatos?: any;
  isloadingStores: boolean = true;

  private _API = inject(ApiStoresService);

  /*  ngOnChanges(changes: SimpleChanges): void {
    this.isloadingStores = this.isloading;

    if (changes['isloading']) {
      this.isloadingStores = changes['isloading'].currentValue;
    }
  } */

  ngOnInit(): void {
    if (this.stores == undefined) {
      console.log(this.stores);
      this._API.getAllStores('stores').subscribe(
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
      console.log(this.stores);
      this.isloadingStores = false;
    }
  }
}
