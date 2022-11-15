import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./main-portal/main-portal.module').then(m => m.MainPortalModule) },

  { path: 'MainPortal', loadChildren: () => import('./main-portal/main-portal.module').then(m => m.MainPortalModule) },

 { path: 'admin', loadChildren: () => import('./admin-portal/admin-portal.module').then(m => m.AdminPortalModule) },
  { path: 'ManagementModule', loadChildren: () => import('./management-module/management-module.module').then(m => m.ManagementModuleModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
