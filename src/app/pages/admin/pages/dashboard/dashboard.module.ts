import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromDashboard from './store/reducers';
import { EffectsModule } from '@ngrx/effects';


import { DashboardCustomerEffects } from './store/effects/dashboard-customer.effects';
import { DashboardSalesExpensesEffects } from './store/effects/dashboard-sales-expenses.effects';
import { DashboardListEffects } from './store/effects/dashboard-list.effects';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule,
    StoreModule.forFeature(fromDashboard.dashboardFeatureKey, fromDashboard.reducers, { metaReducers: fromDashboard.metaReducers }),
    EffectsModule.forFeature([DashboardCustomerEffects, DashboardSalesExpensesEffects, DashboardListEffects])
  ]
})
export class DashboardModule { }

// ng generate effect pages/admin/pages/dashboard/store/effects/DashboardCustomer --root -m pages/admin/pages/dashboard/dashboard.module.ts -d
// ng generate effect pages/admin/pages/dashboard/store/effects/DashboardList --root -m pages/admin/pages/dashboard/dashboard.module.ts
// ng generate effect pages/admin/pages/dashboard/store/effects/DashboardSalesExpenses --root -m pages/admin/pages/dashboard/dashboard.module.ts