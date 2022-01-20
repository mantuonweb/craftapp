import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { AgGridModule } from 'ag-grid-angular';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    HighchartsChartModule,
    AgGridModule.withComponents([]),
    NgSelectModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SidebarComponent, HighchartsChartModule, AgGridModule, CommonModule,    
    NgSelectModule, 
    FormsModule,
    ReactiveFormsModule]
})
export class SharedModule { }
