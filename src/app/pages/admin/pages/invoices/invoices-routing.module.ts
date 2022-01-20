import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesComponent } from './invoices.component';

const routes: Routes = [
  { path: '', component: InvoicesComponent }, 
  { path: 'create', loadChildren: () => import('./add-invoice/add-invoice.module').then(m => m.AddInvoiceModule) },
  { path: 'edit/:id', loadChildren: () => import('./add-invoice/add-invoice.module').then(m => m.AddInvoiceModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
