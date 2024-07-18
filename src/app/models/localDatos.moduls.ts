export interface Datos{
  id:number,
  title:string
  description:string,
  cantidad:number,
  urlImg:string,
}

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

