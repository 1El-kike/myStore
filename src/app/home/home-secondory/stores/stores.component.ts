import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiStoresService } from '../../../services/api-stores.service';

@Component({
  selector: 'app-stores',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.css',
})
export class StoresComponent implements OnInit {
  @Input() stores?: any[];
  newdatos?: any;

  private _API = inject(ApiStoresService);

  ngOnInit(): void {
    if (this.stores == undefined) {
      this._API.getAllStores('stores').subscribe(
        (data) => {
          this.stores = data;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
