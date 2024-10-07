import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-component.component.html',
  styleUrl: './search-component.component.css',
})
export class SearchComponentComponent {
  //valor del input de busqueda
  Element = input<string>();
  searchElement: string = this.Element() as string;

  //elementos de busquedas inicial
  productsEnviados = input<any[]>();
  productsfind: any[] = this.productsEnviados() as any[];

  //elementos de busqueda resultado
  valorfind: any[] = [];
  changefind = output<any[]>();

  update() {
    this.changefind.emit(this.valorfind);
  }

  filterProducts() {
    console.log(this.searchElement, 'test', this.productsfind);
    let filteredProducts: any[] = [];

    if (
      this.searchElement.trim().length > 0 ||
      this.productsfind != undefined
    ) {
      filteredProducts = this.productsfind.filter((productorStore) =>
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
    this.update();
  }
}
