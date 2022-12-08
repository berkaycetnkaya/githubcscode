import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
// route configurasyonu burada yapılıyor

const routes: Routes = [
 {path:"", pathMatch :"full" ,component:ProductComponent},
 
 {path:"products", component:ProductComponent},
 // {path:"product/category/:categoryId", component:ProductComponent}
{path:"login",component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
