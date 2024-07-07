export const productList : Product[] = [
  {id:1,description:'Aceite Hecho en casa',name:"Aceite",cantidad:37,precio:1.20,url:'https://media.istockphoto.com/id/493652014/es/foto/botella-de-aceite-de-oliva.jpg?s=612x612&w=0&k=20&c=sP8GuGOD-o3_fPyirvPJeN3MTffFsZmIl7_H06EnzzY='},
  {id:2,description:'Caldito de Pollo yupyyyy',name:"Caldito de Pollo",cantidad:67,precio:0.25,url:'https://chedrauimx.vtexassets.com/arquivos/ids/31843343-800-auto?v=638556637112230000&width=800&height=auto&aspect=true'},
  {id:3,description:'Para Limpiar la ropa y que quede como nueva',name:"Detergente",cantidad:146,precio:0.85,url:'https://plazavea.vteximg.com.br/arquivos/ids/14673251-512-512/20112023.jpg' },
  {id:4,description:'perritos calientes y frios listo para difrutar no te lo pierdas',name:"Perrito",cantidad:124,precio:1.32, url:'https://ponloencasa.com/images/thumbnails/600/600/detailed/11/Ponlo_en_Casa_Perros_Calientes_paquete.jpg.webp' },
  {id:5,description:'Arroz que nunca ay ven y compra',name:"Arroz",cantidad:201,precio:1.00, url : "https://img.envioscuba.com/Img_Data/500x500/b0d5ed4d-efb6-431e-a1dc-0dc4b81c8bc4.jpg" },
]




export interface Product  {

  id?: number  | string;
  description:string;
  name?: string;
  cantidad: number ;
  precio?: number;
  url?: string

}
