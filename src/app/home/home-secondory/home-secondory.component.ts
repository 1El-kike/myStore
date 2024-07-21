import { NgClass } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Category, DatosCategories } from '../../models/localDatos.moduls';
import { StoresComponent } from "./stores/stores.component";

@Component({
  selector: 'app-home-secondory',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgClass, StoresComponent],
  templateUrl: './home-secondory.component.html',
  styleUrl: './home-secondory.component.css'
})
export class HomeSecondoryComponent implements OnInit{

  @Output() rangeChangeEvent = new EventEmitter<number>();

  options = ['$0', '$288', '$576', '$864'];
  selectedValue = 0;
  selectedOptionIndex = 0;
  category:Category[] = []
  isOpen = false;
  miCheckbox = false;
  toolbar:any[] = [
    { item: 'Distance', check: false, ico: 'none' },
    { item: 'Ratings', check: false, ico: 'none' }
  ];

  miFormulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      checkbox1:[false],
      checkbox2:[false]
    });
  /*   this.toolbar.forEach(item => {
      const control = new FormControl(item.check);
      this.miFormulario.setControl(item.item, control);
    }); */
  }

  /* profileForn = new FormGroup({
    checkbox: new FormControl(false),
    checkbox2: new FormControl(false),
  }) */

  toggleCheck(item: string): void {
   /*  this.miFormulario.value.setValue(!this.miFormulario.value); */
   console.log(this.miFormulario.value)
  }

  toggleCheckCategory(item: string): void {
    this.miFormulario.controls[item].setValue(!this.miFormulario.controls[item].value);
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
  }


}
