import { Component, input, output, InputSignal, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-component.component.html',
  styleUrl: './search-component.component.css',
})
export class SearchComponentComponent  {
  //valor del input de busqueda
  searchElement: string = '';

  //elementos de busquedas inicial
  productsEnviados :InputSignal<any> = input<any>();
  productsfind:any = []

  //elementos de busqueda resultado
  valorfind: any[] = [];
  Element = output<string>();
  changefind = output<any[]>();

constructor(){
  effect(()=>{
    this.productsfind = this.productsEnviados();
  })
}

update(data:any,letle:string) {
  this.changefind.emit(data);
  this.Element.emit(letle)
}


  filterProducts() {
    let filteredProducts: any[] = [];

    if (
      this.searchElement.trim().length > 0 ||
      this.productsfind != undefined
    ) {
      filteredProducts = this.productsfind.filter((productorStore:any) =>
        productorStore.name
          .toLowerCase()
          .includes(this.searchElement.toLowerCase())
      );
    }
    if (
      filteredProducts.length > 0 ||
      this.searchElement !== '' ||
      this.productsfind
    ) {
      this.valorfind = filteredProducts;
    } else {
      this.valorfind = [];
    }
    this.update(this.valorfind,this.searchElement);
  }

}
