import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiStoresService } from '../../../services/api-stores.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-main',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './product-main.component.html',
  styleUrl: './product-main.component.css'
})
export class ProductMainComponent {
//datos de products
products$?: Observable<any>;

private _API = inject(ApiStoresService)

ngOnInit(): void {

  this.products$ = this._API.getAllproducts('allProducts');
}
}
