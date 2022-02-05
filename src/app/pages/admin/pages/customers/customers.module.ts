import { NgModule } from '@angular/core';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromCustomers from './store/reducers';
import { CustomersEffects } from './store/effects/customers.effects';
@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    SharedModule,
    CustomersRoutingModule,
    //ng generate store pages/admin/pages/customers/customers -m customers.module.ts 
    StoreModule.forFeature(fromCustomers.customersFeatureKey, fromCustomers.reducers, { metaReducers: fromCustomers.metaReducers }),
    EffectsModule.forFeature([CustomersEffects]),
  ]
})
export class CustomersModule { }



 // ng generate effect pages/admin/pages/dashboard/dashboard --root -m pages/admin/pages/dashboard/dashboard.module.ts -d

 // ng generate effect pages/admin/pages/dashboard/dashboard/store --root -m pages/admin/pages/dashboard/dashboard.module.ts -d
