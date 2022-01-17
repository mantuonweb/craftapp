import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  toggled = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.toggled = !this.toggled;
  }
  closeSideBar() {
    this.toggled = true;
  }
}
