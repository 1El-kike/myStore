import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home-principal/home.component';
import { ProductComponent } from './components/store/product/product.component';
import { ProductDetailComponent } from './components/store/product-detail/product-detail.component';
import { AuthUserComponent } from './components/auth/auth-user-register/auth-user.component';
import { TodusComponent } from './components/todus/todus.component';
import { StoreComponent } from './components/store/store.component';
import { StoresComponent } from './components/home/home-secondory/stores/stores.component';
import { FavoritProductsComponent } from './components/favorit-products/favorit-products.component';
import { AuthUserLogInComponent } from './components/auth/auth-user-log-in/auth-user-log-in.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'products/:productId', component: ProductDetailComponent },
  { path: 'store', component: StoresComponent },
  { path: 'store/:storeid', component: StoreComponent },
  { path: 'user/register', component: AuthUserComponent },
  { path: 'user/logIn', component: AuthUserLogInComponent },
  { path: 'todus', component: TodusComponent },
  { path: 'favorite', component: FavoritProductsComponent },
  /* {path:'**', redirectTo:'', pathMatch:'full' } */
];
