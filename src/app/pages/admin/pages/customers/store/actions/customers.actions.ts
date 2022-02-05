import { createAction, props } from '@ngrx/store';
const TYPE = '[Customers] '
export const loadCustomers = createAction(`${TYPE} Load Customer`);

export const loadCustomersSuccess = createAction(
  `${TYPE} Load Customer Success`,
  props<{ customers: any[] }>()
);

export const loadLoadCustomersFailure = createAction(
  `${TYPE} Load Customer Failure`,
  props<{ error: any }>()
);
export const resetCustomersLoadingStatus = createAction(
  `${TYPE} Reset Loading Status`
);
export const setCustomersFilter = createAction(
  `${TYPE} Set Customer Filters`,
  props<{ filterText: string }>()
);
