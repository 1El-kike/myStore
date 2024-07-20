import { Component, OnInit } from '@angular/core';
import { Datos, DatosLocales, ProductList, ProductListnew } from '../../../models/localDatos.moduls';

@Component({
  selector: 'app-stores',
  standalone: true,
  imports: [],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.css'
})
export class StoresComponent implements OnInit {

  datos:ProductList[] = ProductListnew;


ngOnInit(): void {

}
}
