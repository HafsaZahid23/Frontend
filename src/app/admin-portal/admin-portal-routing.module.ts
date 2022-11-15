import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { ProductsComponent } from './admin-components/products/products.component';
import { AdminPortalComponent } from './admin-portal.component';

const routes: Routes = [{
   path: '', component: AdminPortalComponent,
   children:[
    {path:'' , component:DashboardComponent},
    {path:'dash-board' , component:DashboardComponent},
    {path:'products' , component:ProductsComponent}
   ]

 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPortalRoutingModule { }
