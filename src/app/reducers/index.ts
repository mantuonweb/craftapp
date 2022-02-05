import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';


export interface State {
  invoices:any
}

export const reducers: ActionReducerMap<State> = {
  invoices:<any>{}
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
