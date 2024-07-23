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
 export interface Store{
  id:number,
  namestore:string,
  start:string,
  image:string,
  product:productStore[],
 }
 export interface productStore{
id:number,
name:string
loading:boolean,
img:string,
description:string,
price:string,
added:boolean,
comprado:boolean
 }

export const StoreList:Store[]= [
    {
      id:1,namestore:"Tienda de 5ta y 96",
      image:"/tienda5tay962.jpg",
      start:'4,5',
      product:[
        {id:1,name:"champu",loading:false,img:"/tienda5tay96.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:2,name:"champu",loading:false,img:"/tienda5tay96.jpg",description:'blablab  lbalvablabllblbalb alblbalalblba llablalbassdasdsa dsdsfdsfs dfsdfeferifj',price:'34,56',added:false,comprado:false},
        {id:3,name:"champu",loading:false,img:"/tienda5tay96.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:4,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:5,name:"champu",loading:false,img:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:6,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:7,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:8,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:9,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:10,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:11,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:12,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:13,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:14,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:15,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:16,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false}
      ]
    },
    {
      id:2,
      namestore:"Tienda 98",
      image:"/tienda982.jpg",
      start:'4.3',
       product:[
      {id:1,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:2,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:3,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:4,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:5,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:6,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:7,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:8,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:9,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:10,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:11,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:12,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:13,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:14,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:15,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:16,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:17,name:"champu",loading:false,img:"/tools",description:'blabla',price:'34,56',added:false,comprado:false},

    ]
  },
]

export const ProductListnew : ProductList[] = [
  {id:1,description:'',name:"Tienda de 5ta y 96",star:37,adress:"Playa",url:'/tienda5tay96.jpg'},
  {id:2,description:'Caldito de Pollo yupyyyy',name:"Tienda 98",star:5.0,adress:"Playa",url:'/tienda98.jpg'},
  {id:3,description:'Para Limpiar la ropa y que quede como nueva',name:"MercoCaribe",star:146,adress:"Playa",url:'/mercocaribe.jpg' },
  {id:4,description:'perritos calientes y frios listo para difrutar no te lo pierdas',name:"Jardines de 5ta",star:124,adress:"Playa", url:'/jardines5ta.jpg' },
  {id:5,description:'Arroz que nunca ay ven y compra',name:"Centro Comercial Palco",star:201,adress:"Playa", url : "palco/palco1.jpg" },
  {id:6,description:'Arroz que nunca ay ven y compra',name:"Mercado Único Cuatro Camino",star:201,adress:"Playa", url : "/mercado4camino/Mercado4camino.jpg" },
  {id:7,description:'Arroz que nunca ay ven y compra',name:"Pedregal",star:201,adress:"Playa", url : "/Pedregal/pedregal.jpg" },
  {id:8,description:'Arroz que nunca ay ven y compra',name:"Carlos III",star:201,adress:"Lisa", url : "/carlosIII.jpg" },
  {id:9,description:'Arroz que nunca ay ven y compra',name:"Almacenes Ultra",star:201,adress:"La Habana", url : "almacenesultra.jpg" },
  {id:10,description:'Arroz que nunca ay ven y compra',name:"Tienda de Gremiio",star:201,adress:"Vedado", url : "/gremio/gremio.jpg" },
  {id:5,description:'Arroz que nunca ay ven y compra',name:"Regalitos MIAU",star:201,adress:"Vedado", url : "/Miau/regalito.jpg" },
  {id:5,description:'Arroz que nunca ay ven y compra',name:"Konbini",star:201,adress:"Vedado", url : "/Konbini/konbini.jpg" },
  {id:5,description:'Arroz que nunca ay ven y compra',name:"CBM",star:201,adress:"Habana", url : "CBM.jpg" },
  {id:5,description:'Arroz que nunca ay ven y compra',name:"Élite Boutique",star:201,adress:"Marianado", url : "eliteBoutique.jpg" },
  {id:5,description:'Arroz que nunca ay ven y compra',name:"Tienda Roselló",star:201,adress:"Vedado", url : "rosello.jpg" },
  {id:5,description:'Arroz que nunca ay ven y compra',name:"Tienda Cimex",star:201,adress:"Vedado", url : "/cimex.jpg" },
  {id:5,description:'Arroz que nunca ay ven y compra',name:"LINDA HABANA Salon",star:201,adress:"Habana", url : "LINDAHABANASalon.jpg" },
  {id:5,description:'Arroz que nunca ay ven y compra',name:"Centro Comercial Altahabana",star:201,adress:"Altahabana", url : "CentroComercialAltahabana.jpg" },
  {id:5,description:'Arroz que nunca ay ven y compra',name:"Mango",star:201,adress:"Habana", url : "/mango.jpg" },
  {id:5,description:'Arroz que nunca ay ven y compra',name:"Cris Cris",star:201,adress:"Habana", url : "/criscris.jpg" },
  {id:11,description:'Arroz que nunca ay ven y compra',name:"Paúl & Shark Boutique",star:201,adress:"Habana", url : "/Paúl_& _S_Boutique.jpg" },
]


export interface ProductList  {

  id?: number  | string;
  description:string;
  name?: string;
  star: number ;
  adress?: string;
  url?: string

}

