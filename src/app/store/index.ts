import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';


export interface AppState {
  admin?:any
}

export const reducers: ActionReducerMap<AppState> = {
};


export const metaReducers: MetaReducer<AppState>[] = [debug, debug2];


export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export function debug2(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state1', state);
    console.log('action1', action);

    return reducer(state, action);
  };
}
