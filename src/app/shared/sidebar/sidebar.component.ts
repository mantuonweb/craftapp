import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() toggled = false;
  @Output() onClose = new EventEmitter<boolean>()
  @Output() onClick = new EventEmitter();

  routeList = [
    { route: '/admin/dashboard', displayName: 'Dashboard', cssClass: 'bi-house' },
    { route: '/admin/items', displayName: 'Items', cssClass: 'bi-person-circle' },
    { route: '/admin/invoices', displayName: 'Invoices', cssClass: 'bi-file-earmark-spreadsheet' },
    { route: '/admin/customers', displayName: 'Customers', cssClass: 'bi-person-circle' }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  toggleSideBar() {
    this.onClose.emit(false);
  }
}
