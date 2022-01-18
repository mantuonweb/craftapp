import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [{
  path: '', 
  component:AdminComponent,
  children: [
    { path: '',redirectTo: 'dashboard',pathMatch: 'full'},
    { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'customers', loadChildren: () => import('./pages/customers/customers.module').then(m => m.CustomersModule) },
    { path: 'items', loadChildren: () => import('./pages/items/items.module').then(m => m.ItemsModule) },
    { path: 'invoices', loadChildren: () => import('./pages/invoices/invoices.module').then(m => m.InvoicesModule) }
  ]
}]
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }


//ng generate module pages/admin/pages/items --route items --module admin.module -d
