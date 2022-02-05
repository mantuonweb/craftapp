import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { DashboardState } from '../models/dashboard.models';
import { environment } from '../../../../../../../environments/environment';
import { customerReducer } from './dashboard.reducers';

export const dashboardFeatureKey = 'dashboard';



export const reducers = customerReducer;


export const metaReducers: MetaReducer<DashboardState>[] = !environment.production ? [] : [];
