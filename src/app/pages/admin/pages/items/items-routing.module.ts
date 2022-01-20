import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items.component';

const routes: Routes = [{ path: '', component: ItemsComponent }, { path: 'add', loadChildren: () => import('./add-items/add-items.module').then(m => m.AddItemsModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
