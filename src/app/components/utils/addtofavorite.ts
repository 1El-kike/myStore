import { Observable } from 'rxjs';
import { favorite } from '../home/home-sections/sections-component/home-sections.component';

export function addtofavorite(
  user: any,
  _API: any,
  _messageService: any,
  messageError: any,
  status: boolean,
  productIndex: number,
  datos: any[]
) {

  let product: any = datos.filter(
    (item: favorite) => item.id_product == productIndex || item.id == productIndex
  );

  if (user == null) {
    _messageService.add({
      severity: 'error',
      summary: 'Favorite',
      detail: 'Your need start autenticate ',
    });
    return;
  } else {
    let data = {
      id: product[0].id,
      status: (product.status = !status),
      icon: (product.icon = status ? 'pi-heart' : ' pi-heart-fill'),
    };
    let myfavor = {
      usuarioId: parseInt(user[0][0].id),
      productoId: parseInt(product[0].id_product || product[0].id),
    };

    (
      _API.createMyfavoriteProduct(
        `mylistProductFavorite/createORdelete`,
        myfavor
      ) as Observable<any>
    ).subscribe(
      (response) => {
        //statusmessage = false;
        datos.forEach((item: any, index: number) => {
          if (datos[index].id_product == productIndex || datos[index].id == productIndex) {
            datos[index].status = !datos[index].status;
            datos[index].icon = datos[index].status
              ? 'pi-heart-fill'
              : 'pi-heart';
          }
        });

      },
      (error) => {
        messageError = error.error.error;
        // this.statusmessage = true;
        console.log(error);
      }
    );

    if (!status) {
      _messageService.add({
        severity: 'success',
        summary: 'Favorite',
        detail: 'Added purchase of ' + product.name,
      });
    }
  }
}
