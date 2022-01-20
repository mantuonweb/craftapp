import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesComponent } from './invoices.component';


@NgModule({
  declarations: [
    InvoicesComponent
  ],
  imports: [
    SharedModule,
    InvoicesRoutingModule
  ]
})
export class InvoicesModule { }
