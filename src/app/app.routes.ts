import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './store/product/product.component';
import { ProductDetailComponent } from './store/product-detail/product-detail.component';
import { AuthUserComponent } from './auth-user/auth-user.component';
import { TodusComponent } from './todus/todus.component';
import { StoreComponent } from './store/store.component';
import { StoresComponent } from './home/home-secondory/stores/stores.component';
import { FavoritProductsComponent } from './favorit-products/favorit-products.component';


export const routes: Routes = [
    { path:'' , component: HomeComponent },
    { path:'products', component: ProductComponent },
    { path:'products/:productId', component:ProductDetailComponent },
    { path:'store', component: StoresComponent },
    { path:'store/:storeid', component: StoreComponent },
    { path:'user', component: AuthUserComponent },
    { path:'todus', component: TodusComponent },
    { path:'favorite', component: FavoritProductsComponent },
    /* {path:'**', redirectTo:'', pathMatch:'full' } */
];
