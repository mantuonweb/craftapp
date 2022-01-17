import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  gridApi:any = null;
  pointStart = Date.UTC(2022, 0, 1);
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
      data: [{ x: Date.UTC(2014, 0, 1), y: 1 },
      { x: Date.UTC(2014, 1, 1), y: 2 },
      { x: Date.UTC(2014, 2, 1), y: 3 },
      { x: Date.UTC(2014, 3, 1), y: 4 },
      { x: Date.UTC(2014, 4, 1), y: 5 },
      { x: Date.UTC(2014, 5, 1), y: 6 },
      { x: Date.UTC(2014, 6, 1), y: 7 },
      { x: Date.UTC(2014, 7, 1), y: 8 },
      { x: Date.UTC(2014, 8, 1), y: 9 },
      { x: Date.UTC(2014, 9, 1), y: 10 },
      { x: Date.UTC(2014, 10, 1), y: 11 },
      { x: Date.UTC(2014, 11, 1), y: 12 }]
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
    { field: 'dueon', headerName: 'Due On' },
    { field: 'customer' , headerName: 'customer' },
    { field: 'amountdue', headerName: 'Amount Due' }
  ];

  rowData = [
    { dueon: '21/01/2022', customer: 'dueon', amountdue: 35000 },
    { dueon: '21/01/2022', customer: 'customer', amountdue: 32000 },
    { dueon: '21/01/2022', customer: 'amountdue', amountdue: 72000 }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onGridReady(grid:any){
    this.gridApi = grid.api;
    this.gridApi.sizeColumnsToFit();
  }
}
