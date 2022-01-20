import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddItemsRoutingModule } from './add-items-routing.module';
import { AddItemsComponent } from './add-items.component';


@NgModule({
  declarations: [
    AddItemsComponent
  ],
  imports: [
    CommonModule,
    AddItemsRoutingModule
  ]
})
export class AddItemsModule { }
