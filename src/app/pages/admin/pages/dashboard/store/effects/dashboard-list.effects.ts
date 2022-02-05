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
export class DashboardListEffects {
  customerDBC$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(DBActions.loadDashboardTiles),
        exhaustMap(() => {
          // Get From Service or Server/DB
          return this.dashboardService.getTiles().pipe(
            map((tiles: any) =>
              DBActions.loadDashboardTilesSuccess({ tiles })
            ),
            catchError((error) =>
              of(DBActions.loadDashboardTilesFailure({ error }))
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
