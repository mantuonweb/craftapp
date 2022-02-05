import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';

import { customerReducer } from './customer.reducer';
import { CustomersState } from '../customer.models';
import { environment } from '../../../../../../../environments/environment';
import { AdminState } from '../../../../store/reducers/admin.reducers';



export const customersFeatureKey = 'customers';


// export const reducers: ActionReducerMap<CustomersState> = {
//   customers: customerReducer
// };

export const reducers = customerReducer;

export const metaReducers: MetaReducer<CustomersState>[] = !environment.production ? [] : [];
