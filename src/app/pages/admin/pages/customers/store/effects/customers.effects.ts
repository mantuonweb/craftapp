import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CustomersService } from '../../../../../../api/customers/customers.api.service';
import { CustomersState } from '../customer.models';
import * as CustomersActions from '../actions/customers.actions';
import { of } from 'rxjs';
import {
  catchError,
  exhaustMap,
  filter,
  map,
  withLatestFrom,
} from 'rxjs/operators';
// import {
//   selectWeatherWithFilter,
//   selectCurrentFilter,
// } from '../selectors/weather.selectors';

@Injectable()
export class CustomersEffects {
  weather$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CustomersActions.loadCustomers),
        // withLatestFrom(this.store.select(selectWeatherWithFilter)),
        // filter(([_, weather]) => {
        //   // Serve the cached data
        //   let status = !weather;
        //   if (!status) {
        //     this.store.dispatch(
        //       WeatherActions.loadWeatherSuccess({ city: weather })
        //     );
        //   }
        //   return status;
        // }),
        // withLatestFrom(this.store.select(selectCurrentFilter)),
        exhaustMap(() => {
          // Get From Service or Server/DB
          return this.customerService.getCustomers().pipe(
            map((customers: any) =>
              CustomersActions.loadCustomersSuccess({ customers })
            ),
            catchError((error) =>
              of(CustomersActions.loadLoadCustomersFailure({ error }))
            )
          );
        })
      );
    },
    { dispatch: true }
  );

  constructor(
    private actions$: Actions,
    private customerService: CustomersService,
    private store: Store<CustomersState>
  ) { }
}