import { Component, inject, Input, OnInit } from '@angular/core';
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
  newdatos?: any;
  isloadingStores: boolean = true;

  private _API = inject(ApiStoresService);

  ngOnInit(): void {
    if (this.stores == undefined) {
      this._API.getAllStores('stores').subscribe(
        (data) => {
          this.stores = data;
          this.isloadingStores = false;
        },
        (error) => {
          console.log(error);
          //   this.isloadingStores = false;
        }
      );
    }
  }
}
