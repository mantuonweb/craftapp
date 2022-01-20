import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'create', loadChildren: () => import('./add-customer/add-customer.module').then(m => m.AddCustomerModule) },
  { path: 'edit/:id', loadChildren: () => import('./add-customer/add-customer.module').then(m => m.AddCustomerModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
