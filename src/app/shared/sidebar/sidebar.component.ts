import { HtmlParser } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() toggled = false;
  @Output() onClose = new EventEmitter<boolean>()
  @Output() onClick = new EventEmitter();
  @ViewChild('sidebarAnchor',{static:true,read:ElementRef}) sidebarAnchor: ElementRef<HTMLElement> | undefined;

  routeList = [
    { route: '/admin/dashboard', displayName: 'Dashboard', cssClass: 'bi-house' },
    { route: '/admin/items', displayName: 'Items', cssClass: 'bi-person-circle' },
    { route: '/admin/invoices', displayName: 'Invoices', cssClass: 'bi-file-earmark-spreadsheet' },
    { route: '/admin/customers', displayName: 'Customers', cssClass: 'bi-person-circle' }
  ]
  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      const element:HTMLElement = <HTMLElement>e.target;
      if(!this.toggled && ! this.isAnchorElement(element)){
        this.onClose.emit(true);
      }
    });
  }
  isAnchorElement(element:HTMLElement){
   return element.classList.contains('sidebar-anchor-icon') || element.classList.contains('sidebar-anchor')
  }
  ngOnInit(): void {
  }
  toggleSideBar() {
    this.onClose.emit(false);
  }
}
