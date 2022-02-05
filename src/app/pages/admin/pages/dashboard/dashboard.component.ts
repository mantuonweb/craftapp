import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import * as Highcharts from 'highcharts';
import { Store } from '@ngrx/store';

import { DashboardState } from './store/models/dashboard.models';
import * as DBActions from './store/actions/dashboard.actions';

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
        { x: Date.UTC(2021, 0, 1), y: 1 },
        { x: Date.UTC(2021, 1, 1), y: 2 },
        { x: Date.UTC(2021, 2, 1), y: 3 },
        { x: Date.UTC(2021, 3, 1), y: 4 },
        { x: Date.UTC(2021, 4, 1), y: 5 },
        { x: Date.UTC(2021, 5, 1), y: 6 },
        { x: Date.UTC(2021, 6, 1), y: 7 },
        { x: Date.UTC(2021, 7, 1), y: 8 },
        { x: Date.UTC(2021, 8, 1), y: 9 },
        { x: Date.UTC(2021, 9, 1), y: 10 },
        { x: Date.UTC(2021, 10, 1), y: 11 },
        { x: Date.UTC(2021, 11, 1), y: 12 }
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

  rowData = [
    { dueon: '21/01/2022', customer: 'dueon', amountdue: 35000 },
    { dueon: '21/01/2022', customer: 'customer', amountdue: 32000 },
    { dueon: '21/01/2022', customer: 'amountdue', amountdue: 72000 }
  ];
  constructor(private store: Store<DashboardState>) {
    this.customers$ = this.store.select(selectDashboardCustomer);
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
}
