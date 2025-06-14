import { RouterLink } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { favorite } from '../home/home-sections/sections-component/home-sections.component';
import { LocalstoreService } from '../services/localstore.service';
import { ApiHomeService } from '../services/api-home.service';
import { Observable } from 'rxjs';
import { FavoriteComponent } from './favorite/favorite.component';

@Component({
  selector: 'app-favorit-products',
  standalone: true,
  imports: [RouterLink, FavoriteComponent],
  templateUrl: './favorit-products.component.html',
  styleUrl: './favorit-products.component.css',
})
export class FavoritProductsComponent implements OnInit {
  datos: favorite[] = [];
  imageFondo = '/fondos/store.png';
  imageSecondary = '/fondos/productStore.png';
  //datos de usuario
  user?: any;

  private _API = inject(ApiHomeService);
  private _servisLocalStore = inject(LocalstoreService);

  ngOnInit(): void {
    this.user = this._servisLocalStore.getUser();
    if (this.user.length == 0) {
      this.user = null;
    } else {
      (
        this._API.getMyfavoriteProduct(
          `mylistProductFavorite/${this.user[0][0].id}`
        ) as Observable<any>
      ).subscribe(
        (data) => {
          this.datos = data;
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
