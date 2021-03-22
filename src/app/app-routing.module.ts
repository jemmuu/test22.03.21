import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { RectiveFormComponent } from './rective-form/rective-form.component';

const routes: Routes = [

  {path:'',redirectTo:'task1' , pathMatch:'full'},
  {path: 'task2',loadChildren:()=> import ('./module/product/product.module').then(m=>m.ProductModule)},
  {path: 'task1', component:RectiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
