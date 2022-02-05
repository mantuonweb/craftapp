import { createReducer, on } from '@ngrx/store';
import { AppState } from '../../../../store';
export const featureAdminStateKey = 'admin';
export interface AdminState extends AppState {
}
export const initialState: AdminState = {
};

export const reducer = createReducer(
  initialState
);
