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
import { CustomersService } from '../../../../../../api/customers/customers.api.service';
import { DashboardState } from '../models/dashboard.models';
import * as DBActions from '../actions/dashboard.actions';

@Injectable()
export class DashboardCustomerEffects {
  customerDBC$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(DBActions.loadDashboardCustomers),
        exhaustMap(() => {
          // Get From Service or Server/DB
          return this.customerService.getCustomers().pipe(
            map((customers: any) =>
              DBActions.loadDashboardCustomersSuccess({ customers })
            ),
            catchError((error) =>
              of(DBActions.loadDashboardCustomersFailure({ error }))
            )
          );
        })
      );
    },
    { dispatch: true }
  );


  constructor(private actions$: Actions,
    private customerService: CustomersService,
    private store: Store<DashboardState>) { }

}
