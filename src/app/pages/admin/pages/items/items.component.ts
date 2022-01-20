import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  gridApi: any = null;
  floatingFilter = false;
  gridOptions = {
    columnDefs:[
      { field: 'name', headerName: 'Name' },
      { field: 'phone', headerName: 'Phone' },
      { field: 'amountdue', headerName: 'Amount Due' },
      { field: 'addedon', headerName: 'Added On'}
    ],
    defaultColDef:{
      flex: 1,
      width:20,
      minWidth: 20,
      resizable: true,
      filter: true,
      floatingFilter:this.floatingFilter,
      headerCheckboxSelection: this.isFirstColumn.bind(this),
      checkboxSelection: this.isFirstColumn.bind(this),
    }
  };
  

  rowData = [
    { name: 'test', phone: '9999999999', addedon: '21/01/2022', amountdue: 35000 },
    { name: 'test', phone: '9999999999', addedon: '21/01/2022', amountdue: 32000 },
    { name: 'test', phone: '9999999999', addedon: '21/01/2022', amountdue: 72000 }
  ];
  rowSelection = 'multiple';
  constructor() { }

  ngOnInit(): void {
  }
  onGridReady(grid: any) {
    this.gridApi = grid.api;
    this.gridApi.sizeColumnsToFit();
  }
  toggleFloating(){
    this.floatingFilter = !this.floatingFilter;
     const columnDefs = this.gridApi.getColumnDefs();
     columnDefs.forEach((colDef:any, index:number)=> {
        colDef.floatingFilter = this.floatingFilter;
     });
     this.gridApi.setColumnDefs(columnDefs);
    //
  }
  isFirstColumn(params:any) {
    var displayedColumns = params.columnApi.getAllDisplayedColumns();
    var thisIsFirstColumn = displayedColumns[0] === params.column;
    return thisIsFirstColumn;
  }
}
