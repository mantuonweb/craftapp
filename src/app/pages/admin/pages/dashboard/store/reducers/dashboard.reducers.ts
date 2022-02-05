import { createReducer, on } from '@ngrx/store';
import { DashboardState } from '../models/dashboard.models';
import * as DashboardActions from '../actions/dashboard.actions';
export const initialState: DashboardState = {
    tiles: {},
    salesExpenses: {},
    customers: [],
    loading: false,
    error: null
};
export const customerReducer = createReducer(
    initialState,
    on(DashboardActions.loadDashboardCustomers, (state) => {
        return {
            ...state,
            loading: true,
        };
    }),
    on(DashboardActions.loadDashboardCustomersSuccess, (state, action) => {
        const customers = [...action.customers];
        return {
            ...state,
            loading: false,
            customers
        };
    }),
    on(DashboardActions.loadDashboardCustomersFailure, (state, action) => {
        return {
            ...state,
            loading: false,
        };
    }),
    on(DashboardActions.resetDashboardLoadingStatus, (state) => {
        return {
            ...state,
            loading: false,
        };
    }),

    // Tiles
    on(DashboardActions.loadDashboardTiles, (state) => {
        return {
            ...state,
            loading: true,
        };
    }),
    on(DashboardActions.loadDashboardTilesSuccess, (state, action) => {
        const tiles = { ...action.tiles };
        return {
            ...state,
            loading: false,
            tiles
        };
    }),
    on(DashboardActions.loadDashboardCustomersFailure, (state, action) => {
        return {
            ...state,
            loading: false,
        };
    }),

    //Sales Expenses
    on(DashboardActions.loadDashboardSalesExpenses, (state) => {
        return {
            ...state,
            loading: true,
        };
    }),
    on(DashboardActions.loadDashboardSalesExpensesSuccess, (state, action) => {
        const salesExpenses = [...action.salesExpenses];
        const res = {
            ...state,
            loading: false,
            salesExpenses
        };
        return res;
    }),
    on(DashboardActions.loadDashboardSalesExpensesFailure, (state, action) => {
        return {
            ...state,
            loading: false,
        };
    })

);