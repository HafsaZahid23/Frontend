import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPortalRoutingModule } from './main-portal-routing.module';
import { MainPortalComponent } from './main-portal.component';
import { HeaderComponent } from './MainPortalComponents/header/header.component';
import { FooterComponent } from './MainPortalComponents/footer/footer.component';
import { HomeComponent } from './MainPortalComponents/home/home.component';
import { AboutComponent } from './MainPortalComponents/about/about.component';
import { ContactUsComponent } from './MainPortalComponents/contact-us/contact-us.component';
import { ProductsComponent } from './MainPortalComponents/products/products.component';
import { ViewProductComponent } from './MainPortalComponents/view-product/view-product.component';
import { CheckOutComponent } from './MainPortalComponents/check-out/check-out.component';
import { EditCartComponent } from './MainPortalComponents/edit-cart/edit-cart.component';
import { PurchaseSuccessfulComponent } from './MainPortalComponents/purchase-successful/purchase-successful.component';
import { PurchaseFailedComponent } from './MainPortalComponents/purchase-failed/purchase-failed.component';


@NgModule({
  declarations: [
    MainPortalComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    ProductsComponent,
    ViewProductComponent,
    CheckOutComponent,
    EditCartComponent,
    PurchaseSuccessfulComponent,
    PurchaseFailedComponent
  ],
  imports: [
    CommonModule,
    MainPortalRoutingModule
  ]
})
export class MainPortalModule { }
