import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Store, StoreList } from '../models/localDatos.moduls';
import { FondoComponent } from "../fondo/fondo.component";

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [RouterLink, FondoComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent implements OnInit {
  storeId?: string
  bgImage = 'url("")';
  position = 'center';
  productList:Store[] = StoreList;
  loading : boolean = true;
  data?:Store;

  private _router = inject(ActivatedRoute)

  addproduct(){

  }

  ngOnInit(): void {
    this._router.params.subscribe(params => {

        this.storeId = params['storeid']
        this.data = this.productList.find(element => element.id == params['storeid'])
        this.loading = false;
        this.bgImage = `url("${this.data?.image}")`
        console.log(this.bgImage)
      },)
}

}
