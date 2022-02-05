import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  exhaustMap,
  filter,
  map,
  withLatestFrom,
} from 'rxjs/operators';
import { DashboardService } from '../../../../../../api/dashboard/dashboard.api.service';
import { DashboardState } from '../models/dashboard.models';
import * as DBActions from '../actions/dashboard.actions';

@Injectable()
export class DashboardSalesExpensesEffects {
  customerDBC$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(DBActions.loadDashboardSalesExpenses),
        exhaustMap(() => {
          // Get From Service or Server/DB
          return this.dashboardService.getExpenses().pipe(
            map((salesExpenses: any) =>
              DBActions.loadDashboardSalesExpensesSuccess({ salesExpenses })
            ),
            catchError((error) =>
              of(DBActions.loadDashboardSalesExpensesFailure({ error }))
            )
          );
        })
      );
    },
    { dispatch: true }
  );


  constructor(private actions$: Actions,
    private dashboardService: DashboardService,
    private store: Store<DashboardState>) { }

}
