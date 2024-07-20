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
    description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
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
  {id:1,description:'Aceite Hecho en casa',name:"Aceite",cantidad:37,precio:1.20,url:'https://media.istockphoto.com/id/493652014/es/foto/botella-de-aceite-de-oliva.jpg?s=612x612&w=0&k=20&c=sP8GuGOD-o3_fPyirvPJeN3MTffFsZmIl7_H06EnzzY='},
  {id:2,description:'Caldito de Pollo yupyyyy',name:"Caldito de Pollo",cantidad:67,precio:0.25,url:'https://chedrauimx.vtexassets.com/arquivos/ids/31843343-800-auto?v=638556637112230000&width=800&height=auto&aspect=true'},
  {id:3,description:'Para Limpiar la ropa y que quede como nueva',name:"Detergente",cantidad:146,precio:0.85,url:'https://plazavea.vteximg.com.br/arquivos/ids/14673251-512-512/20112023.jpg' },
  {id:4,description:'perritos calientes y frios listo para difrutar no te lo pierdas',name:"Perrito",cantidad:124,precio:1.32, url:'https://ponloencasa.com/images/thumbnails/600/600/detailed/11/Ponlo_en_Casa_Perros_Calientes_paquete.jpg.webp' },
  {id:5,description:'Arroz que nunca ay ven y compra',name:"Arroz",cantidad:201,precio:1.00, url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
]


export interface ProductList  {

  id?: number  | string;
  description:string;
  name?: string;
  cantidad: number ;
  precio?: number;
  url?: string

}

