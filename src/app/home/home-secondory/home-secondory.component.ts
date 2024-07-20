import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
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

  tolbar =[{item:'Distance',ico:'none'},{item:'Ratings',ico:'none'}]
  options = ['$0', '$288', '$576', '$864'];
  selectedValue = 0;
  selectedOptionIndex = 0;
  category:Category[] = []
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  onRangeChange(event: any): void {
    const value = event.target.value;
    this.selectedValue = Math.round(value / 325); // Ajusta este valor según tus necesidades
    this.selectOption(this.selectedValue);
  }

  selectOption(index: number): void {
    this.selectedOptionIndex = index;
    this.selectedValue = index * 325; // Ajusta este valor según tus necesidades
  }

  ngOnInit(): void {
   this.category = DatosCategories
  }
}
