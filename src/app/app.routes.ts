import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AuthUserComponent } from './auth-user/auth-user.component';
import { TodusComponent } from './todus/todus.component';


export const routes: Routes = [
    { path:'' , component: HomeComponent },
    { path:'products', component: ProductComponent },
    { path:'products/:productId', component:ProductDetailComponent },
    { path:'user', component: AuthUserComponent },
    { path:'todus', component: TodusComponent },
    {path:'**', redirectTo:'', pathMatch:'full' }
];
