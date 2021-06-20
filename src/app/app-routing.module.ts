import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 const routes: Routes = [ 
   { path: '', loadChildren: () => import('./spoc/spoc.module').then(m => m.SpocModule) },
  { path: 'spoc', loadChildren: () => import('./spoc/spoc.module').then(m => m.SpocModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
