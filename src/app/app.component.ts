import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'craftapp';
  toggled = false;
  toggleSideBar(){
    this.toggled = !this.toggled;

  }
}
