import { createReducer, on } from '@ngrx/store';
import { CustomersState } from '../customer.models';
import * as CustomersActions from '../actions/customers.actions';
export const initialState: CustomersState = {
    list: [],
    selected: -1,
    loading: false,
    error: null,
    filters: null
};
export const customerReducer = createReducer(
    initialState,
    on(CustomersActions.loadCustomers, (state) => {
        return {
            ...state,
            loading: true,
        };
    }),
    on(CustomersActions.loadCustomersSuccess, (state, action) => {
        const list = [...action.customers];
        return {
            ...state,
            loading: false,
            list
        };
    }),
    on(CustomersActions.loadLoadCustomersFailure, (state, action) => {
        return {
            ...state,
            loading: false,
        };
    }),
    on(CustomersActions.resetCustomersLoadingStatus, (state) => {
        return {
            ...state,
            loading: false,
        };
    }),
);