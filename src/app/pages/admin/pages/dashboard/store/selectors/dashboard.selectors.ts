import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHome from '../reducers';
import { DashboardState } from '../models/dashboard.models';


export const selectDashBoardState = createFeatureSelector<DashboardState>(
  fromHome.dashboardFeatureKey
);

export const selectDashBoardLoading = createSelector(
  selectDashBoardState,
  (state) => {
    return state.loading;
  }
);

export const selectCustomersErrorStatus = createSelector(
  selectDashBoardState,
  (state) => {
    return state.error;
  }
);

export const selectDashboardTiles = createSelector(selectDashBoardState, (state) => {
  return state.tiles;
});

export const selectDashboardExpenses = createSelector(selectDashBoardState, (state) => {
  return state.salesExpenses;
});

export const selectDashboardCustomer = createSelector(selectDashBoardState, (state) => {
  return state.customers;
});