import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ViewPercelsComponent } from './view-percels/view-percels.component';

const routes: Routes = [
  {path: 'app-root', component: AppComponent},
  {path: 'app-add-product', component: AddProductComponent},
  {path: 'app-view-percels', component: ViewPercelsComponent},
  {path: 'app-login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
