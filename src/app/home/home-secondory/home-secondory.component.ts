import { NgClass } from '@angular/common';
import { Component, OnInit,  } from '@angular/core';
import {   FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Category, DatosCategories, ProductList, ProductListnew } from '../../models/localDatos.moduls';
import { StoresComponent } from "./stores/stores.component";

@Component({
  selector: 'app-home-secondory',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgClass, StoresComponent],
  templateUrl: './home-secondory.component.html',
  styleUrl: './home-secondory.component.css'
})
export class HomeSecondoryComponent implements OnInit{

  //@Output() rangeChangeEvent = new EventEmitter<number>();

  options = ['$0', '$288', '$576', '$864'];
  selectedValue = 0;
  selectedOptionIndex = 0;
  category:Category[] = []
  isOpen = false;
  miCheckbox?:boolean;
  toolbar:any[] = [
    { item: 'Distance', check: false, ico: 'pi-chart-scatter' },
    { item: 'Ratings', check: false, ico: 'pi-chart-line' }
  ];
  statusStore:boolean = false
  datos:ProductList[] = ProductListnew;
  newDatos?:ProductList[]

//para el estado de el Rating y ordenar por nivel
isRating = ()=>{
  if (this.toolbar[1].check) {
     this.newDatos = this.newDatos?.sort((a,b)=> b.star - a.star)
  } else {
    this.newDatos = [...ProductListnew]
    console.log(this.newDatos)

  }
}

  //para el estado de las tiendas si estan abiertas o cerradas
  isStatusStore=()=>{
   if (this.statusStore) {
    this.newDatos = this.datos.filter(elem => elem.open )
   } else {
    this.newDatos = this.datos
   }
  }

  toggleCheck(item: any): void {
    //this.miFormulario.value.setValue(!this.miFormulario.value);
  }


  onRangeChange(event: any): void {
    const value = event.target.value;
    this.selectedValue = Math.round(value / 325); // Ajusta este valor según tus necesidades
    this.selectOption(this.selectedValue);
  }
  manejarEventoDelHijo(data: {value: number, message: string}): void {
    console.log(data.value, data.message);
  }


  selectOption(index: number): void {
    this.selectedOptionIndex = index;
    this.selectedValue = index * 325; // Ajusta este valor según tus necesidades
  }

  ngOnInit(): void {
   this.category = DatosCategories
   this.newDatos = ProductListnew
  }


}
