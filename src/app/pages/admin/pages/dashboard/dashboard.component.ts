import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import * as Highcharts from 'highcharts';
import { Store } from '@ngrx/store';

import { DashboardState } from './store/models/dashboard.models';
import * as DBActions from './store/actions/dashboard.actions';
import { of } from 'rxjs';
import { take, delay } from 'rxjs/operators';

import {
  selectDashboardTiles,
  selectDashboardExpenses,
  selectDashboardCustomer,
  selectDashBoardLoading,
} from './store/selectors/dashboard.selectors';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  gridApi: any = null;
  pointStart = Date.UTC(2022, 0, 1);
  customers$: any;
  expenses$: any;
  subs$: any;
  tiles$ = of({
    "customers": null,
    "amountdue": null,
    "invoices": null,
    "estimates": null
  });
  chartOptions: Highcharts.Options = {
    title: {
      text: 'Sales & Expenses'
    },
    legend: {
      enabled: false,
      floating: true,
      verticalAlign: 'bottom',
      align: 'right'
    },
    rangeSelector: {
      selected: 1
    },
    xAxis: {
      type: 'datetime',
      tickInterval: 1000 * 3600 * 24 * 30 // 1 month
    },
    series: [{
      type: 'line',
      data: [
      ]
    }],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  };
  columnDefs: ColDef[] = [
    { field: 'addedon', headerName: 'Due On' },
    { field: 'name', headerName: 'Customer' },
    { field: 'amountdue', headerName: 'Amount Due' }
  ];

  rowData = [];
  constructor(private store: Store<DashboardState>) {
    this.customers$ = this.store.select(selectDashboardCustomer);
    this.tiles$ = this.store.select(selectDashboardTiles);
    this.expenses$ = this.store.select(selectDashboardExpenses);
    this.subs$ = this.expenses$.pipe(delay(1)).subscribe((data: any[]) => {
      this.chartOptions.series = [{
        type: 'line',
        data
      }];
      this.chartOptions = { ...this.chartOptions };
    });

  }

  ngOnInit(): void {
    this.store.dispatch(DBActions.loadDashboardCustomers());
    this.store.dispatch(DBActions.loadDashboardTiles());
    this.store.dispatch(DBActions.loadDashboardSalesExpenses());
  }
  onGridReady(grid: any) {
    this.gridApi = grid.api;
    this.gridApi.sizeColumnsToFit();
  }
  ngOnDestroy() {
    if (this.subs$) {
      this.subs$.unsubscribe();
    }
  }
}
