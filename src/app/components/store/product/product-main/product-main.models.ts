interface Type {
  type: string;
  img: string;
  category: Category[];
}

interface Category {
  name: string;
  img: string;
  color?: string;
  size?: string;
}

interface Info {
  image: string;
  text: string;
  info: string;
}

interface Option {
  name: string;
  address: string;
  icon: string;
}

export const typeproduct: Type[] = [
  {
    type: 'Food',
    img: '/category/foods.png',
    category: [
      {
        name: 'Bebidas',
        img: '/category/bebidas.jpg',
      },
      {
        name: 'Cakes',
        img: '/category/cakes.jpg',
      },
      {
        name: 'Carnes',
        img: '/category/carne.jpg',
      },
      {
        name: 'vegetales',
        img: '/category/vegetal.png',
        color: 'bg-black',
      },
      {
        name: 'Dulce',
        img: '/category/dulce.png',
        color: 'bg-black',
      },
      {
        name: 'Lacteos',
        img: '/category/lacteos.jpg',
        color: 'bg-black',
      },
      {
        name: 'Procesado',
        img: '/category/procesado.jpg',
        color: 'bg-black',
      },
      {
        name: 'Helados',
        img: '/category/helado.jpg',
        color: 'bg-black',
      },
    ],
  },
  {
    type: 'Clothes',
    img: 'shoe.png',
    category: [
      {
        name: 'Shoes',
        img: '/category/shoes.png',
        color: 'bg-gradient-to-l from-rose-800 to-rose-950',
      },
      {
        name: 'Shirt',
        img: '/category/shirt.png',
        color: 'bg-gradient-to-l from-blue-800 to-violet-800',
      },
      {
        name: 'Pants',
        img: '/category/pants.png',
        color: 'bg-gradient-to-l from-amber-700 to-orange-800',
      },
      {
        name: 'hat',
        img: '/category/hat.png',
        color: 'bg-gradient-to-l from-gray-300 to-slate-400',
      },
      {
        name: 'calzones',
        img: '/category/calzones.png',
        color: 'bg-gradient-to-l from-gray-300 to-slate-400',
      },
      {
        name: 'Lacteos',
        img: '/category/lacteos.jpg',
        color: 'bg-black',
      },
      {
        name: 'Procesado',
        img: '/category/procesado.jpg',
        color: 'bg-black',
      },
      {
        name: 'Helados',
        img: '/category/helado.jpg',
        color: 'bg-black',
      },
    ],
  },
  {
    type: 'Artesanales',
    img: '/category/artesania.png',
    category: [
      {
        name: 'Shoes',
        img: '/category/bebidas.jpg',
        color: 'bg-black',
      },
      {
        name: 'Shirt',
        img: '/category/cakes.jpg',
        color: 'bg-black',
      },
      {
        name: 'Pants',
        img: '/category/carne.jpg',
        color: 'bg-black',
      },
      {
        name: 'hat',
        img: '/category/vegetal.png',
        color: 'bg-black',
      },
      {
        name: 'Dulce',
        img: '/category/dulce.jpg',
        color: 'bg-black',
      },
      {
        name: 'Lacteos',
        img: '/category/lacteos.jpg',
        color: 'bg-black',
      },
      {
        name: 'Procesado',
        img: '/category/procesado.jpg',
        color: 'bg-black',
      },
      {
        name: 'Helados',
        img: '/category/juegoSala.png',
        color: 'bg-black',
      },
    ],
  },
  {
    type: 'Jeweler',
    img: '/category/juegoSala.png',
    category: [
      {
        name: 'Shoes',
        img: '/category/bebidas.jpg',
        color: 'bg-black',
      },
      {
        name: 'Shirt',
        img: '/category/cakes.jpg',
        color: 'bg-black',
      },
      {
        name: 'Pants',
        img: '/category/carne.jpg',
        color: 'bg-black',
      },
      {
        name: 'hat',
        img: '/category/vegetal.png',
        color: 'bg-black',
      },
      {
        name: 'Dulce',
        img: '/category/dulce.jpg',
        color: 'bg-black',
      },
      {
        name: 'Lacteos',
        img: '/category/lacteos.jpg',
        color: 'bg-black',
      },
      {
        name: 'Procesado',
        img: '/category/procesado.jpg',
        color: 'bg-black',
      },
      {
        name: 'Helados',
        img: '/category/helado.jpg',
        color: 'bg-black',
      },
    ],
  },
];

export const optionProduts: Option[] = [
  {
    name: 'Food',
    address: '',
    icon: '/food.png',
  },
  {
    name: 'Clothes',
    address: '',
    icon: 'shoe.png',
  },
  {
    name: 'provisions',
    address: '',
    icon: 'bienes.png',
  },

];

export const infoHeader: Info[] = [
  { image: 'icons8-casa-96.png', text: 'Fast Get start', info: 'Time full' },
  { image: 'product.png', text: 'Good Calidad', info: 'More very ' },
  { image: 'tools.png', text: 'Remborso', info: 'Garantizado' },
];
