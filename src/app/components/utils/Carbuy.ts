import { MessageService } from "primeng/api";
import { LocalstoreService } from "../services/localstore.service";

export function addbuy(
  datosLocales:any,
  datosnew:any,
  _servisLocalStore:LocalstoreService,
  _messageService:MessageService,
  id: number,
  name: string,
  price: number,
  num: number,
  img: string,
  tipo: string
) {
  const existingData = datosLocales.find((data:any) => data.id === id);
  if (
    !existingData &&
    (datosLocales.length === 0 ||
      !datosLocales.some((data:any) => data.id === id))
  ) {
    datosnew = {
      id: id,
      name: name,
      precio: price,
      cantidad: num,
      img: img,
      tipo: tipo,
    };

    _servisLocalStore.agregarList(datosnew);
    datosLocales = _servisLocalStore.getList();
     _messageService.add({
      severity: 'success',
      summary: 'Good',
      detail: 'Added purchase of ' + name,
    });
  } else {
    _messageService.add({
      severity: 'warn',
      summary: 'Warning',
      detail: `Purchase is of ${name} already added `,
    });
  }
}
