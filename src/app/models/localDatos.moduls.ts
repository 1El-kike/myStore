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
    title:"Oil",
    description:'Fabricado y distribuido por : MercaSID S.A., Av.Maximo Gómez #182,Samto Domingo,Rep.Dom.',
    cantidad:34,
    urlImg:'/products/aceite2.jpg'
  },
  {
    id:2,
    title:"Detergent",
    description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    cantidad:23,
    urlImg:'/products/detergente4.jpg'
  },
  {
    id:5,
    title:"Rice",
    description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    cantidad:348,
    urlImg:'https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg'
  },
  {
    id:12,
    title:"Milk",
    description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    cantidad:348,
    urlImg:'/products/milk.jpg'
  },
  {
    id:4,
    title:"Puppies",
    description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    cantidad:348,
    urlImg:'/products/perros_calientes.jpg'
  },
  {
    id:8,
    title:"Chicken",
    description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    cantidad:348,
    urlImg:'/products/carne2.jpg'
  },
  {
    id:11,
    title:"Spaghetti",
    description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    cantidad:348,
    urlImg:'/products/espaguetis.jpg'
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
        {id:1,name:"Oil",loading:false,img:"/products/aceite.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:2,name:"Detergent",loading:false,img:"/products/detergente.jpg",description:'blablab s dfsdfeferifj',price:'34,56',added:false,comprado:false},
        {id:3,name:"Chicken broth",loading:false,img:"/products/caldito_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:4,name:"Puppies",loading:false,img:"/products/perros_calientes.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:5,name:"Rice",loading:false,img:"/products/arroz.png",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:6,name:"Ham",loading:false,img:"/products/jamon.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:7,name:"Chicken",loading:false,img:"/products/paquete_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:8,name:"Meat",loading:false,img:"/products/carne4.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:9,name:"Hash",loading:false,img:"/products/picadillo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:10,name:"Tomato Puree",loading:false,img:"/products/pure_tomate.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:11,name:"Spaghetti",loading:false,img:"/products/espaguetis.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:12,name:"Milk",loading:false,img:"/products/milk.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:13,name:"Nutella",loading:false,img:"/products/nutella.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:14,name:"Shampoo",loading:false,img:"/products/shampoo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:15,name:"Conditioner",loading:false,img:"/products/conditioner.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:16,name:"Bath soap",loading:false,img:"/products/jabon.jpg",description:'blabla',price:'34,56',added:false,comprado:false}
      ]
    },
    {
      id:2,
      namestore:"Tienda 98",
      image:"/tienda982.jpg",
      start:'4.3',
       product:[
        {id:1,name:"Oil",loading:false,img:"/products/aceite.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:2,name:"Detergent",loading:false,img:"/products/detergente.jpg",description:'blablab  lbalvablabllblbalb alblbalalblba llablalbassdasdsa dsdsfdsfs dfsdfeferifj',price:'34,56',added:false,comprado:false},
        {id:3,name:"Chicken broth",loading:false,img:"/products/caldito_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:4,name:"Puppies",loading:false,img:"/products/perros_calientes.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:5,name:"Rice",loading:false,img:"/products/arroz.png",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:6,name:"Ham",loading:false,img:"/products/jamon.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:7,name:"Chicken",loading:false,img:"/products/paquete_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:8,name:"Meat",loading:false,img:"/products/carne4.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:9,name:"Hash",loading:false,img:"/products/picadillo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:10,name:"Tomato Puree",loading:false,img:"/products/pure_tomate.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:11,name:"Spaghetti",loading:false,img:"/products/espaguetis.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:12,name:"Milk",loading:false,img:"/products/milk.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:13,name:"Nutella",loading:false,img:"/products/nutella.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:14,name:"Shampoo",loading:false,img:"/products/shampoo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:15,name:"Conditioner",loading:false,img:"/products/conditioner.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
        {id:16,name:"Bath soap",loading:false,img:"/products/jabon.jpg",description:'blabla',price:'34,56',added:false,comprado:false}

    ]
  },
  {
    id:3,
    namestore:"MercoCaribe",
    image:"/mercocaribe2.jpg",
    start:'4.3',
     product:[
      {id:1,name:"Oil",loading:false,img:"/products/aceite.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:2,name:"Detergent",loading:false,img:"/products/detergente.jpg",description:'blablab  lbalvablabllblbalb alblbalalblba llablalbassdasdsa dsdsfdsfs dfsdfeferifj',price:'34,56',added:false,comprado:false},
      {id:3,name:"Chicken broth",loading:false,img:"/products/caldito_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:4,name:"Puppies",loading:false,img:"/products/perros_calientes.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:5,name:"Rice",loading:false,img:"/products/arroz.png",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:6,name:"Ham",loading:false,img:"/products/jamon.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:7,name:"Chicken",loading:false,img:"/products/paquete_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:8,name:"Meat",loading:false,img:"/products/carne4.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:9,name:"Hash",loading:false,img:"/products/picadillo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:10,name:"Tomato Puree",loading:false,img:"/products/pure_tomate.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:11,name:"Spaghetti",loading:false,img:"/products/espaguetis.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:12,name:"Milk",loading:false,img:"/products/milk.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:13,name:"Nutella",loading:false,img:"/products/nutella.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:14,name:"Shampoo",loading:false,img:"/products/shampoo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:15,name:"Conditioner",loading:false,img:"/products/conditioner.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
      {id:16,name:"Bath soap",loading:false,img:"/products/jabon.jpg",description:'blabla',price:'34,56',added:false,comprado:false}

  ]
},
{
  id:4,
  namestore:"Jardines de 5ta",
  image:"/jardines5ta2.jpg",
  start:'4.3',
   product:[
    {id:1,name:"Oil",loading:false,img:"/products/aceite.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:2,name:"Detergent",loading:false,img:"/products/detergente.jpg",description:'blablab  lbalvablabllblbalb alblbalalblba llablalbassdasdsa dsdsfdsfs dfsdfeferifj',price:'34,56',added:false,comprado:false},
    {id:3,name:"Chicken broth",loading:false,img:"/products/caldito_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:4,name:"Puppies",loading:false,img:"/products/perros_calientes.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:5,name:"Rice",loading:false,img:"/products/arroz.png",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:6,name:"Ham",loading:false,img:"/products/jamon.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:7,name:"Chicken",loading:false,img:"/products/paquete_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:8,name:"Meat",loading:false,img:"/products/carne4.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:9,name:"Hash",loading:false,img:"/products/picadillo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:10,name:"Tomato Puree",loading:false,img:"/products/pure_tomate.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:11,name:"Spaghetti",loading:false,img:"/products/espaguetis.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:12,name:"Milk",loading:false,img:"/products/milk.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:13,name:"Nutella",loading:false,img:"/products/nutella.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:14,name:"Shampoo",loading:false,img:"/products/shampoo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:15,name:"Conditioner",loading:false,img:"/products/conditioner.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:16,name:"Bath soap",loading:false,img:"/products/jabon.jpg",description:'blabla',price:'34,56',added:false,comprado:false}

]
},
{
  id:5,
  namestore:"Tienda 98",
  image:"/tienda982.jpg",
  start:'4.3',
   product:[
    {id:1,name:"Oil",loading:false,img:"/products/aceite.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:2,name:"Detergent",loading:false,img:"/products/detergente.jpg",description:'blablab  lbalvablabllblbalb alblbalalblba llablalbassdasdsa dsdsfdsfs dfsdfeferifj',price:'34,56',added:false,comprado:false},
    {id:3,name:"Chicken broth",loading:false,img:"/products/caldito_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:4,name:"Puppies",loading:false,img:"/products/perros_calientes.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:5,name:"Rice",loading:false,img:"/products/arroz.png",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:6,name:"Ham",loading:false,img:"/products/jamon.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:7,name:"Chicken",loading:false,img:"/products/paquete_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:8,name:"Meat",loading:false,img:"/products/carne4.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:9,name:"Hash",loading:false,img:"/products/picadillo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:10,name:"Tomato Puree",loading:false,img:"/products/pure_tomate.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:11,name:"Spaghetti",loading:false,img:"/products/espaguetis.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:12,name:"Milk",loading:false,img:"/products/milk.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:13,name:"Nutella",loading:false,img:"/products/nutella.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:14,name:"Shampoo",loading:false,img:"/products/shampoo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:15,name:"Conditioner",loading:false,img:"/products/conditioner.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:16,name:"Bath soap",loading:false,img:"/products/jabon.jpg",description:'blabla',price:'34,56',added:false,comprado:false}

]
},
{
  id:6,
  namestore:"Tienda 98",
  image:"/tienda982.jpg",
  start:'4.3',
   product:[
    {id:1,name:"Oil",loading:false,img:"/products/aceite.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:2,name:"Detergent",loading:false,img:"/products/detergente.jpg",description:'blablab  lbalvablabllblbalb alblbalalblba llablalbassdasdsa dsdsfdsfs dfsdfeferifj',price:'34,56',added:false,comprado:false},
    {id:3,name:"Chicken broth",loading:false,img:"/products/caldito_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:4,name:"Puppies",loading:false,img:"/products/perros_calientes.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:5,name:"Rice",loading:false,img:"/products/arroz.png",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:6,name:"Ham",loading:false,img:"/products/jamon.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:7,name:"Chicken",loading:false,img:"/products/paquete_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:8,name:"Meat",loading:false,img:"/products/carne4.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:9,name:"Hash",loading:false,img:"/products/picadillo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:10,name:"Tomato Puree",loading:false,img:"/products/pure_tomate.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:11,name:"Spaghetti",loading:false,img:"/products/espaguetis.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:12,name:"Milk",loading:false,img:"/products/milk.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:13,name:"Nutella",loading:false,img:"/products/nutella.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:14,name:"Shampoo",loading:false,img:"/products/shampoo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:15,name:"Conditioner",loading:false,img:"/products/conditioner.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:16,name:"Bath soap",loading:false,img:"/products/jabon.jpg",description:'blabla',price:'34,56',added:false,comprado:false}

]
},
{
  id:7,
  namestore:"Tienda 98",
  image:"/tienda982.jpg",
  start:'4.3',
   product:[
    {id:1,name:"Oil",loading:false,img:"/products/aceite.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:2,name:"Detergent",loading:false,img:"/products/detergente.jpg",description:'blablab  lbalvablabllblbalb alblbalalblba llablalbassdasdsa dsdsfdsfs dfsdfeferifj',price:'34,56',added:false,comprado:false},
    {id:3,name:"Chicken broth",loading:false,img:"/products/caldito_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:4,name:"Puppies",loading:false,img:"/products/perros_calientes.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:5,name:"Rice",loading:false,img:"/products/arroz.png",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:6,name:"Ham",loading:false,img:"/products/jamon.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:7,name:"Chicken",loading:false,img:"/products/paquete_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:8,name:"Meat",loading:false,img:"/products/carne4.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:9,name:"Hash",loading:false,img:"/products/picadillo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:10,name:"Tomato Puree",loading:false,img:"/products/pure_tomate.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:11,name:"Spaghetti",loading:false,img:"/products/espaguetis.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:12,name:"Milk",loading:false,img:"/products/milk.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:13,name:"Nutella",loading:false,img:"/products/nutella.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:14,name:"Shampoo",loading:false,img:"/products/shampoo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:15,name:"Conditioner",loading:false,img:"/products/conditioner.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:16,name:"Bath soap",loading:false,img:"/products/jabon.jpg",description:'blabla',price:'34,56',added:false,comprado:false}

]
},
{
  id:8,
  namestore:"Tienda 98",
  image:"/tienda982.jpg",
  start:'4.3',
   product:[
    {id:1,name:"Oil",loading:false,img:"/products/aceite.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:2,name:"Detergent",loading:false,img:"/products/detergente.jpg",description:'blablab  lbalvablabllblbalb alblbalalblba llablalbassdasdsa dsdsfdsfs dfsdfeferifj',price:'34,56',added:false,comprado:false},
    {id:3,name:"Chicken broth",loading:false,img:"/products/caldito_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:4,name:"Puppies",loading:false,img:"/products/perros_calientes.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:5,name:"Rice",loading:false,img:"/products/arroz.png",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:6,name:"Ham",loading:false,img:"/products/jamon.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:7,name:"Chicken",loading:false,img:"/products/paquete_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:8,name:"Meat",loading:false,img:"/products/carne4.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:9,name:"Hash",loading:false,img:"/products/picadillo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:10,name:"Tomato Puree",loading:false,img:"/products/pure_tomate.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:11,name:"Spaghetti",loading:false,img:"/products/espaguetis.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:12,name:"Milk",loading:false,img:"/products/milk.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:13,name:"Nutella",loading:false,img:"/products/nutella.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:14,name:"Shampoo",loading:false,img:"/products/shampoo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:15,name:"Conditioner",loading:false,img:"/products/conditioner.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:16,name:"Bath soap",loading:false,img:"/products/jabon.jpg",description:'blabla',price:'34,56',added:false,comprado:false}

]
},
{
  id:9,
  namestore:"Tienda 98",
  image:"/tienda982.jpg",
  start:'4.3',
   product:[
    {id:1,name:"Oil",loading:false,img:"/products/aceite.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:2,name:"Detergent",loading:false,img:"/products/detergente.jpg",description:'blablab  lbalvablabllblbalb alblbalalblba llablalbassdasdsa dsdsfdsfs dfsdfeferifj',price:'34,56',added:false,comprado:false},
    {id:3,name:"Chicken broth",loading:false,img:"/products/caldito_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:4,name:"Puppies",loading:false,img:"/products/perros_calientes.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:5,name:"Rice",loading:false,img:"/products/arroz.png",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:6,name:"Ham",loading:false,img:"/products/jamon.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:7,name:"Chicken",loading:false,img:"/products/paquete_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:8,name:"Meat",loading:false,img:"/products/carne4.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:9,name:"Hash",loading:false,img:"/products/picadillo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:10,name:"Tomato Puree",loading:false,img:"/products/pure_tomate.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:11,name:"Spaghetti",loading:false,img:"/products/espaguetis.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:12,name:"Milk",loading:false,img:"/products/milk.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:13,name:"Nutella",loading:false,img:"/products/nutella.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:14,name:"Shampoo",loading:false,img:"/products/shampoo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:15,name:"Conditioner",loading:false,img:"/products/conditioner.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:16,name:"Bath soap",loading:false,img:"/products/jabon.jpg",description:'blabla',price:'34,56',added:false,comprado:false}

]
},
{
  id:10,
  namestore:"Tienda 98",
  image:"/tienda982.jpg",
  start:'4.3',
   product:[
    {id:1,name:"Oil",loading:false,img:"/products/aceite.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:2,name:"Detergent",loading:false,img:"/products/detergente.jpg",description:'blablab  lbalvablabllblbalb alblbalalblba llablalbassdasdsa dsdsfdsfs dfsdfeferifj',price:'34,56',added:false,comprado:false},
    {id:3,name:"Chicken broth",loading:false,img:"/products/caldito_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:4,name:"Puppies",loading:false,img:"/products/perros_calientes.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:5,name:"Rice",loading:false,img:"/products/arroz.png",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:6,name:"Ham",loading:false,img:"/products/jamon.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:7,name:"Chicken",loading:false,img:"/products/paquete_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:8,name:"Meat",loading:false,img:"/products/carne4.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:9,name:"Hash",loading:false,img:"/products/picadillo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:10,name:"Tomato Puree",loading:false,img:"/products/pure_tomate.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:11,name:"Spaghetti",loading:false,img:"/products/espaguetis.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:12,name:"Milk",loading:false,img:"/products/milk.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:13,name:"Nutella",loading:false,img:"/products/nutella.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:14,name:"Shampoo",loading:false,img:"/products/shampoo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:15,name:"Conditioner",loading:false,img:"/products/conditioner.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:16,name:"Bath soap",loading:false,img:"/products/jabon.jpg",description:'blabla',price:'34,56',added:false,comprado:false}

]
},
{
  id:11,
  namestore:"Tienda 98",
  image:"/tienda982.jpg",
  start:'4.3',
   product:[
    {id:1,name:"Oil",loading:false,img:"/products/aceite.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:2,name:"Detergent",loading:false,img:"/products/detergente.jpg",description:'blablab  lbalvablabllblbalb alblbalalblba llablalbassdasdsa dsdsfdsfs dfsdfeferifj',price:'34,56',added:false,comprado:false},
    {id:3,name:"Chicken broth",loading:false,img:"/products/caldito_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:4,name:"Puppies",loading:false,img:"/products/perros_calientes.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:5,name:"Rice",loading:false,img:"/products/arroz.png",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:6,name:"Ham",loading:false,img:"/products/jamon.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:7,name:"Chicken",loading:false,img:"/products/paquete_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:8,name:"Meat",loading:false,img:"/products/carne4.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:9,name:"Hash",loading:false,img:"/products/picadillo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:10,name:"Tomato Puree",loading:false,img:"/products/pure_tomate.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:11,name:"Spaghetti",loading:false,img:"/products/espaguetis.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:12,name:"Milk",loading:false,img:"/products/milk.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:13,name:"Nutella",loading:false,img:"/products/nutella.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:14,name:"Shampoo",loading:false,img:"/products/shampoo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:15,name:"Conditioner",loading:false,img:"/products/conditioner.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:16,name:"Bath soap",loading:false,img:"/products/jabon.jpg",description:'blabla',price:'34,56',added:false,comprado:false}

]
},
{
  id:12,
  namestore:"Tienda 98",
  image:"/tienda982.jpg",
  start:'4.3',
   product:[
    {id:1,name:"Oil",loading:false,img:"/products/aceite.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:2,name:"Detergent",loading:false,img:"/products/detergente.jpg",description:'blablab  lbalvablabllblbalb alblbalalblba llablalbassdasdsa dsdsfdsfs dfsdfeferifj',price:'34,56',added:false,comprado:false},
    {id:3,name:"Chicken broth",loading:false,img:"/products/caldito_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:4,name:"Puppies",loading:false,img:"/products/perros_calientes.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:5,name:"Rice",loading:false,img:"/products/arroz.png",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:6,name:"Ham",loading:false,img:"/products/jamon.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:7,name:"Chicken",loading:false,img:"/products/paquete_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:8,name:"Meat",loading:false,img:"/products/carne4.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:9,name:"Hash",loading:false,img:"/products/picadillo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:10,name:"Tomato Puree",loading:false,img:"/products/pure_tomate.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:11,name:"Spaghetti",loading:false,img:"/products/espaguetis.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:12,name:"Milk",loading:false,img:"/products/milk.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:13,name:"Nutella",loading:false,img:"/products/nutella.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:14,name:"Shampoo",loading:false,img:"/products/shampoo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:15,name:"Conditioner",loading:false,img:"/products/conditioner.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:16,name:"Bath soap",loading:false,img:"/products/jabon.jpg",description:'blabla',price:'34,56',added:false,comprado:false}

]
},
{
  id:13,
  namestore:"Tienda 98",
  image:"/tienda982.jpg",
  start:'4.3',
   product:[
    {id:1,name:"Oil",loading:false,img:"/products/aceite.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:2,name:"Detergent",loading:false,img:"/products/detergente.jpg",description:'blablab  lbalvablabllblbalb alblbalalblba llablalbassdasdsa dsdsfdsfs dfsdfeferifj',price:'34,56',added:false,comprado:false},
    {id:3,name:"Chicken broth",loading:false,img:"/products/caldito_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:4,name:"Puppies",loading:false,img:"/products/perros_calientes.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:5,name:"Rice",loading:false,img:"/products/arroz.png",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:6,name:"Ham",loading:false,img:"/products/jamon.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:7,name:"Chicken",loading:false,img:"/products/paquete_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:8,name:"Meat",loading:false,img:"/products/carne4.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:9,name:"Hash",loading:false,img:"/products/picadillo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:10,name:"Tomato Puree",loading:false,img:"/products/pure_tomate.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:11,name:"Spaghetti",loading:false,img:"/products/espaguetis.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:12,name:"Milk",loading:false,img:"/products/milk.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:13,name:"Nutella",loading:false,img:"/products/nutella.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:14,name:"Shampoo",loading:false,img:"/products/shampoo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:15,name:"Conditioner",loading:false,img:"/products/conditioner.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:16,name:"Bath soap",loading:false,img:"/products/jabon.jpg",description:'blabla',price:'34,56',added:false,comprado:false}

]
},
{
  id:14,
  namestore:"Tienda 98",
  image:"/tienda982.jpg",
  start:'4.3',
   product:[
    {id:1,name:"Oil",loading:false,img:"/products/aceite.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:2,name:"Detergent",loading:false,img:"/products/detergente.jpg",description:'blablab  lbalvablabllblbalb alblbalalblba llablalbassdasdsa dsdsfdsfs dfsdfeferifj',price:'34,56',added:false,comprado:false},
    {id:3,name:"Chicken broth",loading:false,img:"/products/caldito_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:4,name:"Puppies",loading:false,img:"/products/perros_calientes.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:5,name:"Rice",loading:false,img:"/products/arroz.png",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:6,name:"Ham",loading:false,img:"/products/jamon.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:7,name:"Chicken",loading:false,img:"/products/paquete_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:8,name:"Meat",loading:false,img:"/products/carne4.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:9,name:"Hash",loading:false,img:"/products/picadillo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:10,name:"Tomato Puree",loading:false,img:"/products/pure_tomate.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:11,name:"Spaghetti",loading:false,img:"/products/espaguetis.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:12,name:"Milk",loading:false,img:"/products/milk.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:13,name:"Nutella",loading:false,img:"/products/nutella.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:14,name:"Shampoo",loading:false,img:"/products/shampoo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:15,name:"Conditioner",loading:false,img:"/products/conditioner.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:16,name:"Bath soap",loading:false,img:"/products/jabon.jpg",description:'blabla',price:'34,56',added:false,comprado:false}

]
},
{
  id:15,
  namestore:"Tienda 98",
  image:"/tienda982.jpg",
  start:'4.3',
   product:[
    {id:1,name:"Oil",loading:false,img:"/products/aceite.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:2,name:"Detergent",loading:false,img:"/products/detergente.jpg",description:'blablab  lbalvablabllblbalb alblbalalblba llablalbassdasdsa dsdsfdsfs dfsdfeferifj',price:'34,56',added:false,comprado:false},
    {id:3,name:"Chicken broth",loading:false,img:"/products/caldito_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:4,name:"Puppies",loading:false,img:"/products/perros_calientes.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:5,name:"Rice",loading:false,img:"/products/arroz.png",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:6,name:"Ham",loading:false,img:"/products/jamon.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:7,name:"Chicken",loading:false,img:"/products/paquete_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:8,name:"Meat",loading:false,img:"/products/carne4.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:9,name:"Hash",loading:false,img:"/products/picadillo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:10,name:"Tomato Puree",loading:false,img:"/products/pure_tomate.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:11,name:"Spaghetti",loading:false,img:"/products/espaguetis.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:12,name:"Milk",loading:false,img:"/products/milk.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:13,name:"Nutella",loading:false,img:"/products/nutella.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:14,name:"Shampoo",loading:false,img:"/products/shampoo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:15,name:"Conditioner",loading:false,img:"/products/conditioner.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:16,name:"Bath soap",loading:false,img:"/products/jabon.jpg",description:'blabla',price:'34,56',added:false,comprado:false}

]
},
{
  id:16,
  namestore:"Tienda 98",
  image:"/tienda982.jpg",
  start:'4.3',
   product:[
    {id:1,name:"Oil",loading:false,img:"/products/aceite.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:2,name:"Detergent",loading:false,img:"/products/detergente.jpg",description:'blablab  lbalvablabllblbalb alblbalalblba llablalbassdasdsa dsdsfdsfs dfsdfeferifj',price:'34,56',added:false,comprado:false},
    {id:3,name:"Chicken broth",loading:false,img:"/products/caldito_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:4,name:"Puppies",loading:false,img:"/products/perros_calientes.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:5,name:"Rice",loading:false,img:"/products/arroz.png",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:6,name:"Ham",loading:false,img:"/products/jamon.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:7,name:"Chicken",loading:false,img:"/products/paquete_pollo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:8,name:"Meat",loading:false,img:"/products/carne4.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:9,name:"Hash",loading:false,img:"/products/picadillo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:10,name:"Tomato Puree",loading:false,img:"/products/pure_tomate.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:11,name:"Spaghetti",loading:false,img:"/products/espaguetis.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:12,name:"Milk",loading:false,img:"/products/milk.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:13,name:"Nutella",loading:false,img:"/products/nutella.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:14,name:"Shampoo",loading:false,img:"/products/shampoo.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:15,name:"Conditioner",loading:false,img:"/products/conditioner.jpg",description:'blabla',price:'34,56',added:false,comprado:false},
    {id:16,name:"Bath soap",loading:false,img:"/products/jabon.jpg",description:'blabla',price:'34,56',added:false,comprado:false}

]
},
]
export const ProductListnew : ProductList[] = [
  {id:1,name:"Tienda de 5ta y 96",star:3.7,adress:"Playa",url:'/tienda5tay96.jpg', open:false},
  {id:2,name:"Tienda 98",star:4.0,adress:"Playa",url:'/tienda98.jpg',open:true },
  {id:3,name:"MercoCaribe",star:4.6,adress:"Playa",url:'/mercocaribe.jpg',open:true },
  {id:4,name:"Jardines de 5ta",star:4.4,adress:"Playa", url:'/jardines5ta.jpg' ,open:true},
  {id:5,name:"Centro Comercial Palco",star:4.7,adress:"Playa", url : "palco/palco1.jpg",open:true },
  {id:6,name:"Mercado Único Cuatro Camino",star:4.2,adress:"Playa", url : "/mercado4camino/Mercado4camino.jpg",open:false },
  {id:7,name:"Pedregal",star:4.1,adress:"Playa", url : "/Pedregal/pedregal.jpg",open:false },
  {id:8,name:"Carlos III",star:4.6,adress:"Lisa", url : "/carlosIII.jpg" ,open:true},
  {id:9,name:"Almacenes Ultra",star:4.5,adress:"La Habana", url : "almacenesultra.jpg" ,open:false},
  {id:10,name:"Tienda de Gremiio",star:3.8,adress:"Vedado", url : "/gremio/gremio.jpg",open:true },
  {id:5,name:"Regalitos MIAU",star:3.9,adress:"Vedado", url : "/Miau/regalito.jpg" ,open:true},
  {id:5,name:"Konbini",star:4.4,adress:"Vedado", url : "/Konbini/konbini.jpg" ,open:false},
  {id:5,name:"CBM",star:4.2,adress:"Habana", url : "CBM.jpg",open:false },
  {id:5,name:"Élite Boutique",star:4.1,adress:"Marianado", url : "eliteBoutique.jpg",open:true },
  {id:5,name:"Tienda Roselló",star:4.8,adress:"Vedado", url : "rosello.jpg" ,open:true},
  {id:5,name:"Tienda Cimex",star:4.3,adress:"Vedado", url : "/cimex.jpg",open:true },
  {id:5,name:"LINDA HABANA Salon",star:4.5,adress:"Habana", url : "LINDAHABANASalon.jpg",open:false },
  {id:5,name:"Centro Comercial Altahabana",star:4.2,adress:"Altahabana", url : "CentroComercialAltahabana.jpg",open:true },
  {id:5,name:"Mango",star:4.7,adress:"Habana", url : "/mango.jpg" ,open:true},
  {id:5,name:"Cris Cris",star:4.3,adress:"Habana", url : "/criscris.jpg",open:true },
  {id:11,name:"Paúl & Shark Boutique",star:4.5,adress:"Habana", url : "/Paúl_& _S_Boutique.jpg",open:false },
]
export interface ProductList  {

  id?: number  | string;
  name?: string;
  star: number ;
  adress?: string;
  url?: string
  open?:boolean;

}

export const productList : Product[] = [
  {id:1,image:[{valor1:'/products/aceite.jpg',valor2:'/products/aceite2.jpg',valor3:'/products/aceite3.jpg',valor4:'/products/aceite.jpg'}] ,description:'Aceite Hecho en casa',name:"Aceite",cantidad:37,precio:1.20,url:'/aceitefavorite.jpg'},
  {id:2,image:[{valor1:'/products/detergente.jpg',valor2:'/products/detergente.2jpg.webp',valor3:'/products/detergente.3jpg.jpg',valor4:'/products/detergente4.jpg'}] ,description:'Para Limpiar la ropa y que quede como nueva',name:"Detergente",cantidad:146,precio:0.85,url:'/products/detergente.2jpg.webp' },
  {id:3,image:[{valor1:'/products/caldito_pollo2jpg.png ',valor2:'/products/caldito_pollo.jpg',valor3:'/products/caldito_pollo.jpg',valor4:'/products/caldito_pollo3.jpg' }] ,description:'Caldito de Pollo yupyyyy',name:"Caldito de Pollo",cantidad:67,precio:0.25,url:'https://chedrauimx.vtexassets.com/arquivos/ids/31843343-800-auto?v=638556637112230000&width=800&height=auto&aspect=true'},
  {id:4,image:[{valor1:'/products/perros_calientes.jpg',valor2:'/products/perros_calientes2.jpg.webp',valor3:'/products/perros_calientes3.jpg' ,valor4:'/products/perros_calientes3.jpg'}],description:'perritos calientes y frios listo para difrutar no te lo pierdas',name:"Perrito",cantidad:124,precio:1.32, url:'/products/perros_calientes2.jpg.webp' },
  {id:5,image:[{valor1:'/products/arroz.png',valor2:'/products/arroz2.jpg',valor3:'/products/arroz3.jpg',valor4:'/products/arroz4.png'}] ,description:'Arroz que nunca ay ven y compra',name:"Arroz",cantidad:201,precio:1.00, url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
  {id:6,image:[{valor1:'/products/jamon.jpg',valor2:'/products/jamon.jpg',valor3:'/products/jamon2.jpeg',valor4:'/products/jamon.jpg'}] ,description:'Arroz que nunca ay ven y compra',name:"Arroz",cantidad:201,precio:1.00, url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
  {id:7,image:[{valor1:'/products/paquete_pollo.jpg',valor2:'/products/pollo2.png',valor3:'/products/pollo3.jpg',valor4:'/products/pollo4.jpg'}] ,description:'Arroz que nunca ay ven y compra',name:"Arroz",cantidad:201,precio:1.00, url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
  {id:8,image:[{valor1:'/products/carne3.jpg',valor2:'/products/carne2.jpg',valor3:'/products/carne4.jpg',valor4:'/products/carne3.jpg'}] ,description:'Arroz que nunca ay ven y compra',name:"Arroz",cantidad:201,precio:1.00, url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
  {id:9,image:[{valor1:'/products/picadillo2.jpg',valor2:'/products/picadillo.jpg',valor3:'/products/picadillo3.jpg',valor4:'/products/picadillo4.jpg'}] ,description:'Arroz que nunca ay ven y compra',name:"Arroz",cantidad:201,precio:1.00, url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
  {id:10,image:[{valor1:'/products/pure_tomate.jpg',valor2:'/products/pure_tomate2.jpg',valor3:'/products/pure_tomate3.jpg',valor4:'/products/pure_tomate4.jpg'}] ,description:'Arroz que nunca ay ven y compra',name:"Arroz",cantidad:201,precio:1.00, url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
  {id:11,image:[{valor1:'/products/espaguetis.jpg',valor2:'/products/espaguetis2.jpg',valor3:'/products/espaguetis3.jpg',valor4:'/products/espaguetis4.jpg'}] ,description:'Arroz que nunca ay ven y compra',name:"Arroz",cantidad:201,precio:1.00, url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
  {id:12,image:[{valor1:'/products/milk2.jpg',valor2:'/products/milk.jpg',valor3:'/products/milk4.jpg',valor4:'/products/milk3.jpg'}] ,description:'Arroz que nunca ay ven y compra',name:"Arroz",cantidad:201,precio:1.00, url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
  {id:13,image:[{valor1:'/products/nutella3.jpg',valor2:'/products/nutella.jpg',valor3:'/products/nutella2.jpg',valor4:'/products/nutella4.jpg'}] ,description:'Arroz que nunca ay ven y compra',name:"Arroz",cantidad:201,precio:1.00, url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
  {id:14,image:[{valor1:'/products/shampoo.jpg',valor2:'/products/shampoo.jpg',valor3:'/products/shampoo.jpg',valor4:'/products/shampoo.jpg'}] ,description:'Arroz que nunca ay ven y compra',name:"Arroz",cantidad:201,precio:1.00, url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
  {id:15,image:[{valor1:'/products/conditioner.jpg',valor2:'/products/conditioner.jpg',valor3:'/products/conditioner.jpg',valor4:'/products/conditioner.jpg'}] ,description:'Arroz que nunca ay ven y compra',name:"Arroz",cantidad:201,precio:1.00, url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
  {id:16,image:[{valor1:'/products/jabon.jpg',valor2:'/products/jabon.jpg',valor3:'/products/jabon.jpg',valor4:'/products/jabon.jpg'}] ,description:'Arroz que nunca ay ven y compra',name:"Arroz",cantidad:201,precio:1.00, url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },

]

export interface Product  {

  id?: number  | string;
  image?:Image[];
  description:string;
  name?: string;
  cantidad: number ;
  precio?: number;
  url?: string

}

export interface Image {
  valor1:string;
  valor2:string;
  valor3:string;
  valor4:string;
}
