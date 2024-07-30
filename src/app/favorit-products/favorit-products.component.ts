import { Component, inject, OnInit } from '@angular/core';
import { favorite } from '../home/find-items/find-items.component';
import { LocalstoreService } from '../services/localstore.service';

@Component({
  selector: 'app-favorit-products',
  standalone: true,
  imports: [],
  templateUrl: './favorit-products.component.html',
  styleUrl: './favorit-products.component.css'
})
export class FavoritProductsComponent implements OnInit {
  datos:favorite[]=[]

  private _localStore = inject(LocalstoreService)

  ngOnInit(): void {
this.datos = this._localStore.getFavorite()
  }
}
