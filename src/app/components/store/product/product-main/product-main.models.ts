interface Type {
  type: string;
  img: string;
  category: Category[];
}

interface Category {
  name: string;
  img: string;
  activate:boolean,
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

export const typeproducts: Type[] = [
  {
    type: 'Food',
    img: '/category/foods.png',
    category: [
      {
        name: 'Bebidas',
        img: '/category/bebidas.jpg',
        activate:false,
      },
      {
        name: 'Cakes',
        img: '/category/cakes.jpg',
        activate:false,
      },
      {
        name: 'Carnicos',
        img: '/category/carne.jpg',
        activate:false,
      },
      {
        name: 'Vegetales',
        img: '/category/vegetal.png',
        activate:false,
        color: 'bg-gradient-to-l from-blue-300 to-red-400',
      },
      {
        name: 'Dulce',
        img: '/category/dulce.png',
        activate:false,
        color: 'bg-gradient-to-l from-blue-300 to-red-400',
      },
      {
        name: 'Lacteos',
        img: '/category/lacteos.jpg',
        activate:false,
        color: 'bg-gradient-to-l from-blue-300 to-red-400',
      },
      {
        name: 'Procesado',
        img: '/category/procesado.jpg',
        activate:false,
        color: 'bg-gradient-to-l from-blue-300 to-red-400',
      },
      {
        name: 'Helados',
        img: '/category/helado.jpg',
        activate:false,

      },
      {
        name: 'Ingredientes',
        img: '/category/helado.jpg',
        activate:false,

      },

    ],
  },
  {
    type: 'Clothes',
    img: '/category/shoes.png',
    category: [
      {
        name: 'Shoes',
        img: '/category/shoes.png',
        activate:false,
        color: 'bg-gradient-to-l from-rose-800 to-rose-950',
      },
      {
        name: 'Shirt',
        img: '/category/shirt.png',
        activate:false,
        color: 'bg-gradient-to-l from-blue-800 to-violet-800',
      },
      {
        name: 'Pants',
        img: '/category/pants.png',
        activate:false,
        color: 'bg-gradient-to-l from-amber-700 to-orange-800',
      },
      {
        name: 'hat',
        img: '/category/hat.png',
        activate:false,
        color: 'bg-gradient-to-l from-gray-300 to-slate-400',
      },
      {
        name: 'calzones',
        img: '/category/calzones.png',
        activate:false,
        color: 'bg-gradient-to-l from-gray-300 to-slate-400',
      },
      {
        name: 'Prendas',
        img: '/category/.jpg',
        activate:false,
        color: 'bg-gradient-to-l from-blue-300 to-red-400',
      },
      {
        name: 'Cintos',
        img: '/category/.jpg',
        activate:false,
        color: 'bg-gradient-to-l from-blue-300 to-red-400',
      },
      {
        name: 'Enguatadas',
        img: '/category/.jpg',
        activate:false,
        color: 'bg-gradient-to-l from-blue-300 to-red-400',
      },
    ],
  },
  {
    type: 'Artesanales',
    img: '/category/artesania.png',
    category: [
      {
        name: 'Name',
        img: '/category/.jpg',
        activate:false,
        color: 'bg-gradient-to-l from-blue-300 to-red-400',
      },
      {
        name: 'Name',
        img: '/category/.jpg',
        activate:false,
        color: 'bg-gradient-to-l from-blue-300 to-red-400',
      },
      {
        name: 'Name',
        img: '/category/.jpg',
        activate:false,
        color: 'bg-gradient-to-l from-blue-300 to-red-400',
      },
      {
        name: 'Name',
        img: '/category/.png',
        activate:false,
        color: 'bg-gradient-to-l from-blue-300 to-red-400'
      },
      {
        name: 'Name',
        img: '/category/.jpg',
        activate:false,
        color: 'bg-gradient-to-l from-blue-300 to-red-400',
      },
      {
        name: 'Name',
        img: '/category/.jpg',
        activate:false,
        color: 'bg-gradient-to-l from-blue-300 to-red-400',
      },
      {
        name: 'Name',
        img: '/category/.jpg',
        activate:false,
        color: 'bg-gradient-to-l from-blue-300 to-red-400',
      },
      {
        name: 'Name',
        img: '/category/.png',
        activate:false,
        color: 'bg-gradient-to-l from-blue-300 to-red-400',
      },
    ],
  },
  {
    type: 'Jeweler',
    img: '/category/juegoSala.png',
    category: [
      {
        name: 'Shoes',
        img: '/category/.jpg',
        activate:false,
        color: 'bg-gradient-to-l from-blue-300 to-red-400',
      },
      {
        name: 'Shirt',
        img: '/category/.jpg',
        activate:false,
        color: 'bg-gradient-to-l from-blue-300 to-red-400',
      },
      {
        name: 'Pants',
        img: '/category/.jpg',
        activate:false,
        color: 'bg-gradient-to-l from-blue-300 to-red-400',
      },
      {
        name: 'hat',
        img: '/category/.png',
        activate:false,
        color: 'bg-gradient-to-l from-blue-300 to-red-400',
      },
      {
        name: 'Dulce',
        img: '/category/.jpg',
        activate:false,
        color: 'bg-gradient-to-l from-blue-300 to-red-400',
      },
      {
        name: 'Lacteos',
        img: '/category/.jpg',
        activate:false,
        color: 'bg-gradient-to-l from-blue-300 to-red-400',
      },
      {
        name: 'Procesado',
        img: '/category/.jpg',
        activate:false,
        color: 'bg-gradient-to-l from-blue-300 to-red-400',
      },
      {
        name: 'Helados',
        img: '/category/.jpg',
        activate:false,
        color: 'bg-gradient-to-l from-blue-300 to-red-400',
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
