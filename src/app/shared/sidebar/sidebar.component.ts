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
  constructor() { }

  ngOnInit(): void {
  }
  toggleSideBar(){
    this.onClose.emit(false);
  }
}
