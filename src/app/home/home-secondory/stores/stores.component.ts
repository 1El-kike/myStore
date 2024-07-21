import { Component, OnInit } from '@angular/core';
import { Datos, DatosLocales, ProductList, ProductListnew } from '../../../models/localDatos.moduls';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stores',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.css'
})
export class StoresComponent implements OnInit {

  datos:ProductList[] = ProductListnew;


ngOnInit(): void {

}
}
