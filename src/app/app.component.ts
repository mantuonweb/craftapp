import { Component } from '@angular/core';
import * as Highcharts from "highcharts";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'craftapp';
  toggled = false;
  Highcharts: typeof Highcharts = Highcharts;
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
  toggleSideBar() {
    this.toggled = !this.toggled;
  }
}
