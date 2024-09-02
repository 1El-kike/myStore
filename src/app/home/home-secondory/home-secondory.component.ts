import { NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoresComponent } from './stores/stores.component';
import { ApiStoresService } from '../../services/api-stores.service';
import { DatosCategories } from '../../models/localDatos.moduls';

@Component({
  selector: 'app-home-secondory',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgClass, StoresComponent],
  templateUrl: './home-secondory.component.html',
  styleUrl: './home-secondory.component.css',
})
export class HomeSecondoryComponent implements OnInit {
  options = ['$0', '$288', '$576', '$864'];
  selectedValue = 0;
  selectedOptionIndex = 0;
  category: any[] = [];
  isOpen = false;
  miCheckbox?: boolean;
  toolbar: any[] = [
    { item: 'Distance', check: false, ico: 'pi-chart-scatter' },
    { item: 'Ratings', check: false, ico: 'pi-chart-line' },
  ];
  statusStore: boolean = false;
  //datos almacenados originales de las tiendas
  storesData?: any[];
  //datos que se pasaran al componente Store para los datos de la tiendas
  newDatos?: any[];

  private _API = inject(ApiStoresService);
  //para el estado de el Rating y ordenar por nivel
  isRating = () => {
    if (this.toolbar[1].check) {
      this.newDatos = this.newDatos?.sort((a, b) => b.rating - a.rating);
    } else {
      this._API
        .getAllStores('stores')
        .subscribe((datoInicial) => (this.newDatos = datoInicial));
    }
  };

  //para el estado de las tiendas si estan abiertas o cerradas
  isStatusStore = () => {
    if (this.statusStore) {
      this.newDatos = this.newDatos?.filter((elem) => elem.isOpen);
    } else {
      this._API
        .getAllStores('stores')
        .subscribe((datoInicial) => (this.newDatos = datoInicial));
    }
  };

  toggleCheck(item: any): void {
    //this.miFormulario.value.setValue(!this.miFormulario.value);
  }

  //para establecer por precio el orden de busqueda
  onRangeChange(event: any): void {
    const value = event.target.value;
    this.selectedValue = Math.round(value / 325); // Ajusta este valor según tus necesidades
    this.selectOption(this.selectedValue);
  }
  manejarEventoDelHijo(data: { value: number; message: string }): void {
    console.log(data.value, data.message);
  }

  selectOption(index: number): void {
    this.selectedOptionIndex = index;
    this.selectedValue = index * 325; // Ajusta este valor según tus necesidades
  }

  ngOnInit(): void {
    this._API.getAllStores('stores/').subscribe(
      (storesData) => {
        this.newDatos = storesData;
      },
      (error) => {
        console.log(error);
      }
    );
    this.category = DatosCategories;
  }
}
