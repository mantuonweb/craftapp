import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import * as fromAdmin from './store/reducers/admin.reducers';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
    StoreModule.forFeature(
      fromAdmin.featureAdminStateKey,
      fromAdmin.reducer
    ),
    EffectsModule.forFeature([])
  ]
})
export class AdminModule { }
