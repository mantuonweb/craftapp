import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHome from '../reducers';
import { CustomersState } from '../customer.models';


export const selectCustomersState = createFeatureSelector<CustomersState>(
  fromHome.customersFeatureKey
);

export const selectCustomersLoading = createSelector(
  selectCustomersState,
  (state) => {
    return state.loading;
  }
);

export const selectCustomersErrorStatus = createSelector(
  selectCustomersState,
  (state) => {
    return state.error;
  }
);

export const selectCustomers = createSelector(selectCustomersState, (state) => {
  return state.list;
});

export const selectCurrentFilter = createSelector(
  selectCustomersState,
  (state) => {
    return state.filters;
  }
);



// Future
// export const selectCustomersWithFilter = createSelector(
//   selectCustomersState,
//   (state) => {
//     return state.cities[state.filterText];
//   }
// );

