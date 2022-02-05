import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadCustomers } from './store/actions/customers.actions';
import { from, Observable } from 'rxjs';
import {
  selectCustomers,
  selectCustomersLoading,
} from './store/selectors/customers.selectors';

import { CustomersState } from './store/customer.models';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  gridApi: any = null;
  floatingFilter = false;
  selectLoading$: any;
  customers$: Observable<any[]>;
  customers: any[] = [];
  gridOptions = {
    columnDefs: [
      { field: 'name', headerName: 'Name' },
      { field: 'phone', headerName: 'Phone' },
      { field: 'amountdue', headerName: 'Amount Due' },
      { field: 'addedon', headerName: 'Added On' }
    ],
    defaultColDef: {
      flex: 1,
      width: 20,
      minWidth: 20,
      resizable: true,
      filter: true,
      floatingFilter: this.floatingFilter,
      headerCheckboxSelection: this.isFirstColumn.bind(this),
      checkboxSelection: this.isFirstColumn.bind(this),
    }
  };


  rowData = [
  ];
  rowSelection = 'multiple';
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private store: Store<CustomersState>) {
    this.customers$ = this.store.select(selectCustomers);
  }

  ngOnInit(): void {

    this.store.dispatch(loadCustomers());
    this.selectLoading$ = this.store.select(selectCustomersLoading);

  }
  onGridReady(grid: any) {
    this.gridApi = grid.api;
    this.gridApi.sizeColumnsToFit();
  }
  toggleFloating() {
    this.floatingFilter = !this.floatingFilter;
    // this.gridOptions.defaultColDef.floatingFilter =  this.floatingFilter;
    // this.gridApi.refreshHeader();
    /**
     */
    const columnDefs = this.gridApi.getColumnDefs();
    columnDefs.forEach((colDef: any, index: number) => {
      colDef.floatingFilter = this.floatingFilter;
    });
    this.gridApi.setColumnDefs(columnDefs);
    //
  }
  isFirstColumn(params: any) {
    var displayedColumns = params.columnApi.getAllDisplayedColumns();
    var thisIsFirstColumn = displayedColumns[0] === params.column;
    return thisIsFirstColumn;
  }

  add() {
    this.router.navigate(['create'], { relativeTo: this.activatedRoute })
  }
  edit() {
    const id = 123;
    this.router.navigate(['edit', id], { relativeTo: this.activatedRoute })
  }
}