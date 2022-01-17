import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { AgGridModule } from 'ag-grid-angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    HighchartsChartModule,
    AgGridModule.withComponents([]),
  ],
  exports: [SidebarComponent, HighchartsChartModule, AgGridModule, CommonModule]
})
export class SharedModule { }
