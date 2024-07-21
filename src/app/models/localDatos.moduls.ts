export interface Datos{
  id:number,
  title:string
  description:string,
  cantidad:number,
  urlImg:string,
}

export interface Category {
  id:number,
  categories:string,
  status:boolean
}

export const DatosCategories:Category[] = [
  {id:0,categories:"Cubana",status:false},
  {id:1,categories:"China",status:false},
  {id:2,categories:"Japonesa",status:false},
  {id:3,categories:"Pizzas",status:false},
  {id:4,categories:"Mexicana",status:false},
  {id:5,categories:"Cubana",status:false},
  {id:6,categories:"Cubana",status:false},
  {id:7,categories:"Cubana",status:false,},
  {id:8,categories:"Cubana",status:false},
  {id:9,categories:"Cubana",status:false},
  {id:10,categories:"Cubana",status:false},
  {id:11,categories:"Cubana",status:false},
  {id:12,categories:"Cubana",status:false},
  {id:13,categories:"Cubana",status:false},
  {id:14,categories:"Cubana",status:false},
  {id:15,categories:"Cubana",status:false},
  {id:16,categories:"Cubana",status:false},
  {id:17,categories:"Cubana",status:false},
]
export const DatosLocales:Datos[] =
  [
    {
    id:1,
    title:"Aceite",
    description:'Fabricado y distribuido por : MercaSID S.A., Av.Maximo Gómez #182,Samto Domingo,Rep.Dom.',
    cantidad:34,
    urlImg:'https://media.istockphoto.com/id/493652014/es/foto/botella-de-aceite-de-oliva.jpg?s=612x612&w=0&k=20&c=sP8GuGOD-o3_fPyirvPJeN3MTffFsZmIl7_H06EnzzY='
  },
  {
    id:2,
    title:"Detergente",
    description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    cantidad:23,
    urlImg:'https://plazavea.vteximg.com.br/arquivos/ids/14673251-512-512/20112023.jpg'
  },
  {
    id:3,
    title:"Rice",
    description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    cantidad:348,
    urlImg:'https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg'
  },

]

export const ProductListnew : ProductList[] = [
  {id:1,description:'',name:"tienda de 5ta y 96",star:37,adress:"Playa",url:'/tienda5tay96.jpg'},
  {id:2,description:'Caldito de Pollo yupyyyy',name:"Tienda 98",star:5.0,adress:"Playa",url:'/tienda98.jpg'},
  {id:3,description:'Para Limpiar la ropa y que quede como nueva',name:"MercoCaribe",star:146,adress:"Playa",url:'/mercocaribe.jpg' },
  {id:4,description:'perritos calientes y frios listo para difrutar no te lo pierdas',name:"Jardines de 5ta",star:124,adress:"Playa", url:'/jardines5ta.jpg' },
  {id:5,description:'Arroz que nunca ay ven y compra',name:"Centro Comercial Palco",star:201,adress:"Playa", url : "/palco.jpg" },
  {id:6,description:'Arroz que nunca ay ven y compra',name:"La Nueva Joya",star:201,adress:"Playa", url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
  {id:7,description:'Arroz que nunca ay ven y compra',name:"Pedregal",star:201,adress:"Playa", url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
  {id:8,description:'Arroz que nunca ay ven y compra',name:"Mercado La Coronela",star:201,adress:"Lisa", url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
  {id:9,description:'Arroz que nunca ay ven y compra',name:"Dulselle",star:201,adress:"Lisa", url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
  {id:10,description:'Arroz que nunca ay ven y compra',name:"Tienda de Gremiio",star:201,adress:"Vedado", url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
  {id:5,description:'Arroz que nunca ay ven y compra',name:"Regalitos MIAU",star:201,adress:"Vedado", url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
  {id:5,description:'Arroz que nunca ay ven y compra',name:"Konbini",star:201,adress:"Vedado", url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
  {id:5,description:'Arroz que nunca ay ven y compra',name:"Trd nuevo milenio",star:201,adress:"Habana", url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
  {id:5,description:'Arroz que nunca ay ven y compra',name:"Complejo de Tiendas Focsa",star:201,adress:"Vedado", url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
  {id:5,description:'Arroz que nunca ay ven y compra',name:"AlvinGames",star:201,adress:"Vedado", url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
  {id:5,description:'Arroz que nunca ay ven y compra',name:"Tienda Cimex",star:201,adress:"Vedado", url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
  {id:5,description:'Arroz que nunca ay ven y compra',name:"Amandome",star:201,adress:"Habana", url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
  {id:5,description:'Arroz que nunca ay ven y compra',name:"Bodegón Carlitos",star:201,adress:"Habana", url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
  {id:5,description:'Arroz que nunca ay ven y compra',name:"Mango",star:201,adress:"Habana", url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
  {id:5,description:'Arroz que nunca ay ven y compra',name:"Cris Cris",star:201,adress:"Habana", url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
  {id:11,description:'Arroz que nunca ay ven y compra',name:"Paúl & Shark Boutique",star:201,adress:"Habana", url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
]


export interface ProductList  {

  id?: number  | string;
  description:string;
  name?: string;
  star: number ;
  adress?: string;
  url?: string

}

