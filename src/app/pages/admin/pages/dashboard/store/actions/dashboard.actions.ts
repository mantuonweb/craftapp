import { createAction, props } from '@ngrx/store';
const TYPE = '[Dashboard] ';

/* #region Customers*/
export const loadDashboardCustomers = createAction(`${TYPE} Load Dashboard Customers`);

export const loadDashboardCustomersSuccess = createAction(
  `${TYPE} Load Dashboard Customer Success`,
  props<{ customers: any[] }>()
);

export const loadDashboardCustomersFailure = createAction(
  `${TYPE} Load Dashboard Customer Failure`,
  props<{ error: any }>()
);
export const resetDashboardLoadingStatus = createAction(
  `${TYPE} Reset Loading Status`
);
/*#endregion*/



/* #region Tiles*/
export const loadDashboardTiles = createAction(`${TYPE} Load Dashboard Tiles`);

export const loadDashboardTilesSuccess = createAction(
  `${TYPE} Load Dashboard Tiles Success`,
  props<{ tiles: any[] }>()
);

export const loadDashboardTilesFailure = createAction(
  `${TYPE} Load Dashboard Tiles Failure`,
  props<{ error: any }>()
);
/*#endregion*/


/* #region salesExpenses*/
export const loadDashboardSalesExpenses = createAction(`${TYPE} Load Dashboard SalesExpenses`);

export const loadDashboardSalesExpensesSuccess = createAction(
  `${TYPE} Load Dashboard SalesExpenses Success`,
  props<{ salesExpenses: any }>()
);

export const loadDashboardSalesExpensesFailure = createAction(
  `${TYPE} Load Dashboard SalesExpenses Failure`,
  props<{ error: any }>()
);
/*#endregion*/
