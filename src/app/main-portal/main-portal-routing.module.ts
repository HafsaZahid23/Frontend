import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPortalComponent } from './main-portal.component';
import { AboutComponent } from './MainPortalComponents/about/about.component';
import { CheckOutComponent } from './MainPortalComponents/check-out/check-out.component';
import { ContactUsComponent } from './MainPortalComponents/contact-us/contact-us.component';
import { EditCartComponent } from './MainPortalComponents/edit-cart/edit-cart.component';
import { HomeComponent } from './MainPortalComponents/home/home.component';
import { ProductsComponent } from './MainPortalComponents/products/products.component';
import { PurchaseFailedComponent } from './MainPortalComponents/purchase-failed/purchase-failed.component';
import { PurchaseSuccessfulComponent } from './MainPortalComponents/purchase-successful/purchase-successful.component';

const routes: Routes = [{ 
  path: '', component: MainPortalComponent,
  children:[
    {path:'' , component:HomeComponent},
    {path:'home' , component:HomeComponent},
    {path:'about' , component:AboutComponent},
    {path:'check-out' , component:CheckOutComponent},
    {path:'contact-us' , component:ContactUsComponent},
    {path:'products' , component:ProductsComponent},
    {path:'edit-cart' , component:EditCartComponent},
    {path:'purchase-failed' , component:PurchaseFailedComponent},
    {path:'purchase-successful' , component:PurchaseSuccessfulComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPortalRoutingModule { }
