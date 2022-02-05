import { createReducer, on } from '@ngrx/store';
import { CustomersState } from '../customer.models';

export const initialState: CustomersState = {
    list: [],
    selected: -1,
    loading: false,
    error: null,
    filters: null
};
export const customerReducer = createReducer(
    initialState
);